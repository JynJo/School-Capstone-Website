import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Blockquote from '@tiptap/extension-blockquote'
import { FaBold, FaItalic, FaUnderline, FaHeading, FaListUl, FaListOl, FaQuoteLeft, FaMinus, FaUndo, FaRedo } from 'react-icons/fa'

const extensions = [
  StarterKit,
  Underline,
  Blockquote
]

const Tiptap = ({ content, setData }) => {
  const editor = useEditor({
    content: content,
    onUpdate: ({ editor }) => setData('content', editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'form-control min-h-[12rem] p-3 border rounded-b',
      },
    },
    extensions,
  })

  if (!editor) {
    return null
  }

  const MenuButton = ({ onClick, active, disabled, children, className = '' }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-sm ${active ? 'btn-primary' : 'btn-outline-secondary'} ${className}`}
    >
      {children}
    </button>
  )

  return (
    <div className="mb-3">
      
      {/* Toolbar */}
      <div className="btn-toolbar mb-1 gap-1" role="toolbar">
        {/* Text Formatting */}
        <div className="btn-group btn-group-sm" role="group">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={!editor.can().chain().focus().toggleBold().run()}
            active={editor.isActive('bold')}
          >
            <FaBold />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={!editor.can().chain().focus().toggleItalic().run()}
            active={editor.isActive('italic')}
          >
            <FaItalic />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive('underline')}
          >
            <FaUnderline />
          </MenuButton>
        </div>

        {/* Headings */}
        <div className="btn-group btn-group-sm" role="group">
          <MenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            active={editor.isActive('heading', { level: 1 })}
          >
            H1
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            active={editor.isActive('heading', { level: 2 })}
          >
            H2
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            active={editor.isActive('heading', { level: 3 })}
          >
            H3
          </MenuButton>
        </div>

        {/* Lists */}
        <div className="btn-group btn-group-sm" role="group">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive('bulletList')}
          >
            <FaListUl />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive('orderedList')}
          >
            <FaListOl />
          </MenuButton>
        </div>

        {/* Block Elements */}
        <div className="btn-group btn-group-sm" role="group">
          <MenuButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive('blockquote')}
          >
            <FaQuoteLeft />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <FaMinus />
          </MenuButton>
        </div>

        {/* History */}
        <div className="btn-group btn-group-sm" role="group">
          <MenuButton
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().chain().focus().undo().run()}
          >
            <FaUndo />
          </MenuButton>
          <MenuButton
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().chain().focus().redo().run()}
          >
            <FaRedo />
          </MenuButton>
        </div>
      </div>

      {/* Editor Content */}
      <EditorContent className='h-50' editor={editor} />
    </div>
  )
}

export default Tiptap