import { styled } from "@linaria/react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Vars } from "@styles/variables";

const SMain = styled.div`
  width: 100%;
  div {
    padding-bottom: 4px;
  }

  .ProseMirror {
    -webkit-box-flex: 1;
    flex-grow: 1;
  }

  .ProseMirror:focus {
    outline: none;
  }
`;

const SBackground = styled.div`
  padding-bottom: 4px;
  padding-top: 4px;
  background-color: rgba(21, 32, 43, 1);
`;

const SPadding = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  /* padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
  padding-left: constant(safe-area-inset-left);
  padding-right: constant(safe-area-inset-right); */
`;

const SButton = styled.button`
  position: fixed !important;
  bottom: 18vh;
  left: 50vw;
  margin-left: -28px;
`;

const Main = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    autofocus: true,
    editable: true,
    injectCSS: false,
    content: `<p>welcome hooman! 🌎️</p>`,
  });

  return (
    <>
      <SMain className="css-div-common r-m-lr-auto r-f-g-1">
        <div className="css-div-common r-f-g-1 ">
          <SBackground className="css-div-common r-f-g-1 ">
            <SPadding className="css-div-common r-f-g-1  r-f-d-column">
              <EditorContent
                className="css-div-common r-f-g-1 "
                style={{ width: "100%" }}
                editor={editor}
              />
              <button>Tien</button>
            </SPadding>
          </SBackground>
        </div>
      </SMain>
    </>
  );
};

export default Main;
