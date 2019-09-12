// Generated from Message.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MessageParser.

function MessageVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MessageVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MessageVisitor.prototype.constructor = MessageVisitor;

// Visit a parse tree produced by MessageParser#chat.
MessageVisitor.prototype.visitChat = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#line.
MessageVisitor.prototype.visitLine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#message.
MessageVisitor.prototype.visitMessage = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#name.
MessageVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#command.
MessageVisitor.prototype.visitCommand = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#emoticon.
MessageVisitor.prototype.visitEmoticon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#link.
MessageVisitor.prototype.visitLink = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#color.
MessageVisitor.prototype.visitColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MessageParser#mention.
MessageVisitor.prototype.visitMention = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MessageVisitor = MessageVisitor;