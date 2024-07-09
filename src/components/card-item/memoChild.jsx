import { memo } from "react";

export const MemoChild = memo(({ id, onLike}) => {
  console.log("Render")

  return (
    <>
      <div className="items">
        <button onClick={() => onLike(id)} key={id}>
          Liks
        </button>
      </div>
    </>
  );
}); // memo смотрит только на свои пропсы, и игнорирует ререндер родительского компонента
