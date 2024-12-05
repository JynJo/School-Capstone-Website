// src/Tiptap.tsx
import './style.scss'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Underline from '@tiptap/extension-underline'
import Blockquote from '@tiptap/extension-blockquote'
// define your extension array
const extensions = [
    StarterKit,
    Document,
    Paragraph,
    BulletList,
    ListItem,
    Underline,
    Blockquote
]


const Tiptap = ({ content, setData}) => {
  var editor = useEditor({
    content: content,
    onUpdate: ({ editor }) => setData('content', editor.getHTML()),
    editorProps: {
        attributes: {
            class: 'border min-h-[12rem] prose max-w-none p-4',
    }},
    extensions,
  })

  return (
    <div className="border rounded mt-2">
            <div className="control-group">
      <div className="button-group bg-gray-100 p-2">

    <div className="flex align-middle gap-x-4 border-gray-200 p-2 button-container">
      <button
        className="size-8 p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
            }
            className={editor.isActive('bold') ? 'bg-gray-100' : ''}
            >
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 12a4 4 0 0 0 0-8H6v8"></path>
                <path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path>
            </svg>
      </button>
      <button
        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'bg-gray-100' : ''}      >
        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" x2="10" y1="4" y2="4"></line>
          <line x1="14" x2="5" y1="20" y2="20"></line>
          <line x1="15" x2="9" y1="4" y2="20"></line>
        </svg>
      </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'bg-gray-100' : ''}>
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                <line x1="4" x2="20" y1="20" y2="20"></line>
            </svg>

        </button>
      {/* ... other buttons follow the same pattern ... */}
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
            >
          H1
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
        >
          H4
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          Bullet list
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          Ordered list
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Blockquote
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          Horizontal rule
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
            type="button"

        >
          Undo
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .redo()
                .run()
            }
        >
          Redo
        </button>
          </div>
    </div>
    </div>
      <EditorContent editor={editor} />
      {/*<FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>*/}
      {/*<BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>*/}
    </div>
  )
}

export default Tiptap


