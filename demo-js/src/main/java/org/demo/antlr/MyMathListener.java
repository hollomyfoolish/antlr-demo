package org.demo.antlr;

import java.util.ArrayList;
import java.util.List;

import org.antlr.v4.runtime.tree.ErrorNode;
import org.antlr.v4.runtime.tree.TerminalNode;

import grammars.math.MathBaseListener;
import grammars.math.MathParser;

public class MyMathListener extends MathBaseListener {
	private List<List<Integer>> parsers = new ArrayList<List<Integer>>();
	private boolean collectDigit = false;
	private StringBuilder temp = new StringBuilder();
	
	@Override
	public void enterParse(MathParser.ParseContext ctx) {
		this.parsers.add(new ArrayList<Integer>());
	}
	
	@Override
	public void enterNumber(MathParser.NumberContext ctx) {
		this.collectDigit = true;
		this.temp.setLength(0);
	}
	
	@Override
	public void exitNumber(MathParser.NumberContext ctx) {
		this.collectDigit = false;
		this.parsers.get(this.parsers.size() - 1).add(Integer.parseInt(this.temp.toString()));
		this.temp.setLength(0);
	}
	
	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override
	public void visitTerminal(TerminalNode node) {
		if(node.getSymbol().getType() == MathParser.DIGIT) {
			if(this.collectDigit) {
				temp.append(node.getText());
			}else {
				System.err.println("miss digit: " + node.getText());
			}
		}
	}
	/**
	 * {@inheritDoc}
	 *
	 * <p>The default implementation does nothing.</p>
	 */
	@Override
	public void visitErrorNode(ErrorNode node) {
		
	}
	
	public void printResult() {
		System.out.println(this.parsers);
	}
}
