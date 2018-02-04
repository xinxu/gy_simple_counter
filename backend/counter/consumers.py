from channels.generic.websocket import JsonWebsocketConsumer
from threading import Thread
import asyncio


class CounterConsumer(JsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.status = 0
        self.count = 0
        self.loop = None
    
    def connect(self):
        self.accept()
        self._run_tick_loop()

    def receive_json(self, content):
        if content["type"] == "CLIENT/START":
            self.status = 1
            self._sendType("SERVER/STARTED")
        if content["type"] == "CLIENT/PAUSE":
            self.status = 2
            self._sendType("SERVER/PAUSED")
        if content["type"] == "CLIENT/RESET":
            self.status = 0
            self.count = 0
            self._sendType("SERVER/RESETED", True)

    def disconnect(self):
        self.loop.stop()

    def _sendType(self, t, update_count=False):
        data = {
            "type": t,
        }
        if update_count:
            data["payload"] = {
                "counterNumber": self.count
            }
        self.send_json(data)

    def _run_tick_loop(self):
        def start_loop(loop):
            asyncio.set_event_loop(loop)
            loop.run_forever()
        new_loop = asyncio.new_event_loop()
        t = Thread(target=start_loop, args=(new_loop,))
        t.start()
        self.loop = new_loop
        asyncio.run_coroutine_threadsafe(self._tick(), new_loop)

    async def _tick(self):
        while True:
            if self.status == 1:
                self._sendType("SERVER/UPDATE", True)
            await asyncio.sleep(1)
            if self.status != 0:
                self.count += 1
