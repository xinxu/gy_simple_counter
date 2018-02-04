from django.conf.urls import url

from channels.routing import ProtocolTypeRouter, URLRouter, ChannelNameRouter
from channels.sessions import SessionMiddlewareStack
from counter.consumers import CounterConsumer, ManageConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        url("^counter/$", CounterConsumer),
    ]),
    "channel": ChannelNameRouter({
        "manage": ManageConsumer,
    }),
})
