This repo contain a simple message bus mechanism ,project depend on socket.io & socket.io client
*********************************

workflow:
node connect to the bus
then set its listening events
when this node most be have emitted to one of its events we emit this event to it

*********************************

TODO
1- we need to grouping same event listeners in a room
2- implement 4 events at least to make code more interesting