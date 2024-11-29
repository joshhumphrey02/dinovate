import React, { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

type TextEditorProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
};

const TextEditor = (props: TextEditorProps) => {
	const { value, onChange, placeholder } = props;
	const { quill, quillRef } = useQuill({
		placeholder: placeholder || 'Write something',
	});
	useEffect(() => {
		if (quill) {
			quill.clipboard.dangerouslyPasteHTML(value);
		}
	}, []);
	useEffect(() => {
		if (quill) {
			quill.on('text-change', () => {
				onChange(quill.root.innerHTML);
			});
		}
		return () => {
			if (quill) {
				quill.off('text-change');
			}
		};
	}, [quill, onChange]);

	return (
		<div className=" w-full h-[15rem] border border-border pb-6">
			<div className="w-full h-full relative">
				<div ref={quillRef} />
			</div>
		</div>
	);
};

export default TextEditor;
