from channels.generic.websocket import JsonWebsocketConsumer
from threading import Thread
import asyncio


class CounterConsumer(JsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.status = 0
        self.count = 0
        self.loop = None

    async def tick(self):
        while True:
            if self.status == 1:
                self.send_json(
                    {
                        "type": "SERVER/UPDATE",
                        "payload": {
                            "counterNumber": self.count
                        }
                    }
                )
            await asyncio.sleep(1)
            if self.status != 0:
                self.count += 1
    
    def connect(self):
        self.accept()
        self.run_tick_loop()

    def receive_json(self, content):
        if content["type"] == "CLIENT/START":
            self.status = 1
            self.sendType("SERVER/STARTED")
        if content["type"] == "CLIENT/PAUSE":
            self.status = 2
            self.sendType("SERVER/PAUSED")
        if content["type"] == "CLIENT/RESET":
            self.status = 0
            self.sendType("SERVER/RESETED")

    def disconnect(self):
        self.loop.stop()
        return

    def sendType(self, t):
        self.send_json(
            {
                "type": t,
            }
        )
    def run_tick_loop(self):
        def start_loop(loop):
            asyncio.set_event_loop(loop)
            loop.run_forever()
        new_loop = asyncio.new_event_loop()
        t = Thread(target=start_loop, args=(new_loop,))
        t.start()
        self.loop = new_loop
        asyncio.run_coroutine_threadsafe(self.tick(), new_loop)
