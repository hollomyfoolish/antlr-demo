// Generated from Message.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MessageListener = require('./MessageListener').MessageListener;
var MessageVisitor = require('./MessageVisitor').MessageVisitor;

var grammarFileName = "Message.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000fJ\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002",
    "\r\u0002\u000e\u0002\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0006\u0004\'\n\u0004\r\u0004",
    "\u000e\u0004(\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0005\u00074",
    "\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00079\n\u0007\u0003",
    "\u0007\u0005\u0007<\n\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0002",
    "\u0002\u000b\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003",
    "\u0002\t\n\u0002J\u0002\u0015\u0003\u0002\u0002\u0002\u0004\u001b\u0003",
    "\u0002\u0002\u0002\u0006&\u0003\u0002\u0002\u0002\b*\u0003\u0002\u0002",
    "\u0002\n-\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e=",
    "\u0003\u0002\u0002\u0002\u0010@\u0003\u0002\u0002\u0002\u0012F\u0003",
    "\u0002\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003",
    "\u0002\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0019\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007\u0002\u0002\u0003\u001a\u0003\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0005\b\u0005\u0002\u001c\u001d\u0005",
    "\n\u0006\u0002\u001d\u001e\u0005\u0006\u0004\u0002\u001e\u001f\u0007",
    "\r\u0002\u0002\u001f\u0005\u0003\u0002\u0002\u0002 \'\u0005\f\u0007",
    "\u0002!\'\u0005\u000e\b\u0002\"\'\u0005\u0010\t\u0002#\'\u0005\u0012",
    "\n\u0002$\'\u0007\u000b\u0002\u0002%\'\u0007\f\u0002\u0002& \u0003\u0002",
    "\u0002\u0002&!\u0003\u0002\u0002\u0002&\"\u0003\u0002\u0002\u0002&#",
    "\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002",
    "\u0002\'(\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003",
    "\u0002\u0002\u0002)\u0007\u0003\u0002\u0002\u0002*+\u0007\u000b\u0002",
    "\u0002+,\u0007\f\u0002\u0002,\t\u0003\u0002\u0002\u0002-.\t\u0002\u0002",
    "\u0002./\u0007\u0003\u0002\u0002/0\u0007\f\u0002\u00020\u000b\u0003",
    "\u0002\u0002\u000213\u0007\u0003\u0002\u000224\u0007\u0004\u0002\u0002",
    "32\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002",
    "\u00025<\u0007\u0005\u0002\u000268\u0007\u0003\u0002\u000279\u0007\u0004",
    "\u0002\u000287\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003",
    "\u0002\u0002\u0002:<\u0007\u0006\u0002\u0002;1\u0003\u0002\u0002\u0002",
    ";6\u0003\u0002\u0002\u0002<\r\u0003\u0002\u0002\u0002=>\u0007\u000e",
    "\u0002\u0002>?\u0007\u000e\u0002\u0002?\u000f\u0003\u0002\u0002\u0002",
    "@A\u0007\u0007\u0002\u0002AB\u0007\u000b\u0002\u0002BC\u0007\u0007\u0002",
    "\u0002CD\u0005\u0006\u0004\u0002DE\u0007\u0007\u0002\u0002E\u0011\u0003",
    "\u0002\u0002\u0002FG\u0007\b\u0002\u0002GH\u0007\u000b\u0002\u0002H",
    "\u0013\u0003\u0002\u0002\u0002\b\u0017&(38;"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'-'", "')'", "'('", "'/'", "'@'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "SAYS", 
                      "SHOUTS", "WORD", "WHITESPACE", "NEWLINE", "TEXT", 
                      "NUMBER" ];

var ruleNames =  [ "chat", "line", "message", "name", "command", "emoticon", 
                   "link", "color", "mention" ];

function MessageParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MessageParser.prototype = Object.create(antlr4.Parser.prototype);
MessageParser.prototype.constructor = MessageParser;

Object.defineProperty(MessageParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MessageParser.EOF = antlr4.Token.EOF;
MessageParser.T__0 = 1;
MessageParser.T__1 = 2;
MessageParser.T__2 = 3;
MessageParser.T__3 = 4;
MessageParser.T__4 = 5;
MessageParser.T__5 = 6;
MessageParser.SAYS = 7;
MessageParser.SHOUTS = 8;
MessageParser.WORD = 9;
MessageParser.WHITESPACE = 10;
MessageParser.NEWLINE = 11;
MessageParser.TEXT = 12;
MessageParser.NUMBER = 13;

MessageParser.RULE_chat = 0;
MessageParser.RULE_line = 1;
MessageParser.RULE_message = 2;
MessageParser.RULE_name = 3;
MessageParser.RULE_command = 4;
MessageParser.RULE_emoticon = 5;
MessageParser.RULE_link = 6;
MessageParser.RULE_color = 7;
MessageParser.RULE_mention = 8;


function ChatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_chat;
    return this;
}

ChatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChatContext.prototype.constructor = ChatContext;

ChatContext.prototype.EOF = function() {
    return this.getToken(MessageParser.EOF, 0);
};

ChatContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

ChatContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterChat(this);
	}
};

ChatContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitChat(this);
	}
};

ChatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitChat(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.ChatContext = ChatContext;

MessageParser.prototype.chat = function() {

    var localctx = new ChatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MessageParser.RULE_chat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.line();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MessageParser.WORD);
        this.state = 23;
        this.match(MessageParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LineContext.prototype.command = function() {
    return this.getTypedRuleContext(CommandContext,0);
};

LineContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

LineContext.prototype.NEWLINE = function() {
    return this.getToken(MessageParser.NEWLINE, 0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitLine(this);
	}
};

LineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitLine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.LineContext = LineContext;

MessageParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MessageParser.RULE_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.name();
        this.state = 26;
        this.command();
        this.state = 27;
        this.message();
        this.state = 28;
        this.match(MessageParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.emoticon = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmoticonContext);
    } else {
        return this.getTypedRuleContext(EmoticonContext,i);
    }
};

MessageContext.prototype.link = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinkContext);
    } else {
        return this.getTypedRuleContext(LinkContext,i);
    }
};

MessageContext.prototype.color = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ColorContext);
    } else {
        return this.getTypedRuleContext(ColorContext,i);
    }
};

MessageContext.prototype.mention = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MentionContext);
    } else {
        return this.getTypedRuleContext(MentionContext,i);
    }
};

MessageContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MessageParser.WORD);
    } else {
        return this.getToken(MessageParser.WORD, i);
    }
};


MessageContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MessageParser.WHITESPACE);
    } else {
        return this.getToken(MessageParser.WHITESPACE, i);
    }
};


MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitMessage(this);
	}
};

MessageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitMessage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.MessageContext = MessageContext;

MessageParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MessageParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 36;
        		this._errHandler.sync(this);
        		switch(this._input.LA(1)) {
        		case MessageParser.T__0:
        		    this.state = 30;
        		    this.emoticon();
        		    break;
        		case MessageParser.TEXT:
        		    this.state = 31;
        		    this.link();
        		    break;
        		case MessageParser.T__4:
        		    this.state = 32;
        		    this.color();
        		    break;
        		case MessageParser.T__5:
        		    this.state = 33;
        		    this.mention();
        		    break;
        		case MessageParser.WORD:
        		    this.state = 34;
        		    this.match(MessageParser.WORD);
        		    break;
        		case MessageParser.WHITESPACE:
        		    this.state = 35;
        		    this.match(MessageParser.WHITESPACE);
        		    break;
        		default:
        		    throw new antlr4.error.NoViableAltException(this);
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 38; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.WORD = function() {
    return this.getToken(MessageParser.WORD, 0);
};

NameContext.prototype.WHITESPACE = function() {
    return this.getToken(MessageParser.WHITESPACE, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.NameContext = NameContext;

MessageParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MessageParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(MessageParser.WORD);
        this.state = 41;
        this.match(MessageParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.WHITESPACE = function() {
    return this.getToken(MessageParser.WHITESPACE, 0);
};

CommandContext.prototype.SAYS = function() {
    return this.getToken(MessageParser.SAYS, 0);
};

CommandContext.prototype.SHOUTS = function() {
    return this.getToken(MessageParser.SHOUTS, 0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitCommand(this);
	}
};

CommandContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitCommand(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.CommandContext = CommandContext;

MessageParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MessageParser.RULE_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        _la = this._input.LA(1);
        if(!(_la===MessageParser.SAYS || _la===MessageParser.SHOUTS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 44;
        this.match(MessageParser.T__0);
        this.state = 45;
        this.match(MessageParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmoticonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_emoticon;
    return this;
}

EmoticonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmoticonContext.prototype.constructor = EmoticonContext;


EmoticonContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterEmoticon(this);
	}
};

EmoticonContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitEmoticon(this);
	}
};

EmoticonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitEmoticon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.EmoticonContext = EmoticonContext;

MessageParser.prototype.emoticon = function() {

    var localctx = new EmoticonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MessageParser.RULE_emoticon);
    var _la = 0; // Token type
    try {
        this.state = 57;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(MessageParser.T__0);
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MessageParser.T__1) {
                this.state = 48;
                this.match(MessageParser.T__1);
            }

            this.state = 51;
            this.match(MessageParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 52;
            this.match(MessageParser.T__0);
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===MessageParser.T__1) {
                this.state = 53;
                this.match(MessageParser.T__1);
            }

            this.state = 56;
            this.match(MessageParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LinkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_link;
    return this;
}

LinkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinkContext.prototype.constructor = LinkContext;

LinkContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MessageParser.TEXT);
    } else {
        return this.getToken(MessageParser.TEXT, i);
    }
};


LinkContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterLink(this);
	}
};

LinkContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitLink(this);
	}
};

LinkContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitLink(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.LinkContext = LinkContext;

MessageParser.prototype.link = function() {

    var localctx = new LinkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MessageParser.RULE_link);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(MessageParser.TEXT);
        this.state = 60;
        this.match(MessageParser.TEXT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.WORD = function() {
    return this.getToken(MessageParser.WORD, 0);
};

ColorContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitColor(this);
	}
};

ColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.ColorContext = ColorContext;

MessageParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MessageParser.RULE_color);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.match(MessageParser.T__4);
        this.state = 63;
        this.match(MessageParser.WORD);
        this.state = 64;
        this.match(MessageParser.T__4);
        this.state = 65;
        this.message();
        this.state = 66;
        this.match(MessageParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MentionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MessageParser.RULE_mention;
    return this;
}

MentionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MentionContext.prototype.constructor = MentionContext;

MentionContext.prototype.WORD = function() {
    return this.getToken(MessageParser.WORD, 0);
};

MentionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.enterMention(this);
	}
};

MentionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MessageListener ) {
        listener.exitMention(this);
	}
};

MentionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MessageVisitor ) {
        return visitor.visitMention(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MessageParser.MentionContext = MentionContext;

MessageParser.prototype.mention = function() {

    var localctx = new MentionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, MessageParser.RULE_mention);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(MessageParser.T__5);
        this.state = 69;
        this.match(MessageParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.MessageParser = MessageParser;
