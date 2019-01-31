import React, { Component } from 'react'
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin'
import editorStyles from './GBEditor.module.css'
import {
	ItalicButton,
	BoldButton,
	UnderlineButton,
	CodeButton,
	UnorderedListButton,
	OrderedListButton,
	BlockquoteButton,
	CodeBlockButton
} from 'draft-js-buttons'
import 'draft-js-inline-toolbar-plugin/lib/plugin.css'

import HeadlinesButton from './HeadlinesButton/HeadlinesButton'

const inlineToolbarPlugin = createInlineToolbarPlugin()
const { InlineToolbar } = inlineToolbarPlugin
const plugins = [inlineToolbarPlugin]
const text = 'In this editor a toolbar shows up once you select part of the text …'

export default class GBEditor extends Component {
	state = {
		editorState: createEditorStateWithText(text)
	}

	onChange = editorState => {
		this.setState({
			editorState
		})
	}

	focus = () => {
		this.editor.focus()
	}

	render() {
		return (
			<div className={editorStyles.editor} onClick={this.focus}>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					plugins={plugins}
					ref={element => {
						this.editor = element
					}}
				/>
				<InlineToolbar>
					{externalProps => (
						<>
							<BoldButton {...externalProps} />
							<ItalicButton {...externalProps} />
							<UnderlineButton {...externalProps} />
							<CodeButton {...externalProps} />
							<Separator {...externalProps} />
							<HeadlinesButton {...externalProps} />
							<UnorderedListButton {...externalProps} />
							<OrderedListButton {...externalProps} />
							<BlockquoteButton {...externalProps} />
							<CodeBlockButton {...externalProps} />
						</>
					)}
				</InlineToolbar>
			</div>
		)
	}
}
