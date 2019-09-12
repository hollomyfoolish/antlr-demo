grammar Math;

parse
	: number (','|WhiteSpace number WhiteSpace*)* EOF
	;

number
	: DIGIT DIGIT DIGIT
	| DIGIT DIGIT
	| DIGIT
	;

DIGIT
	: '0'..'9'
	;

WhiteSpace
  :  (' ' | '\t' | '\r' | '\n')+
  ;