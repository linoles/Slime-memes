import { MemeProps, memes } from "../lib/definitions"

export default function Meme({ file, id, date }: MemeProps) {
  return (
    <div></div>
  )
}

export const BestMemes = () => {
  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id}>
          <Meme file={meme.file} id={meme.id} date={meme.date} />
        </div>
      ))}
    </div>
  )
}