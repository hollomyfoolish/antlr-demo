// Generated from Message.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MessageParser.
function MessageListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MessageListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MessageListener.prototype.constructor = MessageListener;

// Enter a parse tree produced by MessageParser#chat.
MessageListener.prototype.enterChat = function(ctx) {
};

// Exit a parse tree produced by MessageParser#chat.
MessageListener.prototype.exitChat = function(ctx) {
};


// Enter a parse tree produced by MessageParser#line.
MessageListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by MessageParser#line.
MessageListener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by MessageParser#message.
MessageListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by MessageParser#message.
MessageListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by MessageParser#name.
MessageListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by MessageParser#name.
MessageListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by MessageParser#command.
MessageListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by MessageParser#command.
MessageListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by MessageParser#emoticon.
MessageListener.prototype.enterEmoticon = function(ctx) {
};

// Exit a parse tree produced by MessageParser#emoticon.
MessageListener.prototype.exitEmoticon = function(ctx) {
};


// Enter a parse tree produced by MessageParser#link.
MessageListener.prototype.enterLink = function(ctx) {
};

// Exit a parse tree produced by MessageParser#link.
MessageListener.prototype.exitLink = function(ctx) {
};


// Enter a parse tree produced by MessageParser#color.
MessageListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by MessageParser#color.
MessageListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by MessageParser#mention.
MessageListener.prototype.enterMention = function(ctx) {
};

// Exit a parse tree produced by MessageParser#mention.
MessageListener.prototype.exitMention = function(ctx) {
};



exports.MessageListener = MessageListener;