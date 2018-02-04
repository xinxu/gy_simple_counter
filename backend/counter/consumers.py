from channels.generic.websocket import JsonWebsocketConsumer
from channels.consumer import SyncConsumer, AsyncConsumer
from asgiref.sync import AsyncToSync
import time
import logging, logging.config
import sys

LOGGING = {
    'version': 1,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'stream': sys.stdout,
        }
    },
    'root': {
        'handlers': ['console'],
        'level': 'INFO'
    }
}

logging.config.dictConfig(LOGGING)

class ManageConsumer(SyncConsumer):
    def __init__(self, *args, **kwargs):
        self.consumers = []
    
    def add(self, message):
        name = message["channel_name"]
        self.consumers.append(name)
        AsyncToSync(self.channel_layer.send)(
            name,
            {
                "type": "tick",
                "text": "Hello World"
            }
        )


class CounterConsumer(JsonWebsocketConsumer):
    def __init__(self, *args, **kwargs):
        self.status = 0
    
    def connect(self):
        self.accept()
        AsyncToSync(self.channel_layer.group_add)("counter", self.channel_name)

    def receive_json(self, content):
        if content["type"] == "CLIENT/START":
            self.status = 1
            self.sendType("SERVER/STARTED")
            self.add_to()
        if content["type"] == "CLIENT/PAUSE":
            self.status = 2
            self.sendType("SERVER/PAUSED")
        if content["type"] == "CLIENT/RESET":
            self.status = 0
            self.sendType("SERVER/RESETED")

    def disconnect(self):
        AsyncToSync(self.channel_layer.group_discard)("counter", self.channel_name)
        return

    def tick(self, message):
        logging.info(message)

    def sendType(self, t):
        self.send_json(
            {
                "type": t,
            }
        )
    def add_to(self):
        AsyncToSync(self.channel_layer.send)(
            "manage",
            {
                "type": "add",
                "channel_name": self.channel_name
            },
        )
    # def counting(self, message):
    #     if self.status != 1:
    #         return
    #     time.sleep(1)
    #     self.send_json(
    #         {
    #             "type": "SERVER/UPDATE",
    #             "payload": {
    #                 "value": 1
    #             }
    #         }
    #     )
    #     self.startCounting()

