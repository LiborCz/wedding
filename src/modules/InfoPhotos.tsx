import { Image } from "@heroui/react";


export default function InfoOther() {

  return (
    <div className="flex flex-col gap-4 mb-4 justify-center-safe">
      <div className="my-2">
        <p style={{overflowWrap: 'break-word'}}><b>Fotky od Vás:</b>{'  '}Poprosím pokud budete mít nějaké hezké fotky z obřadu nebo z odpolední/večerní oslavičky - tak klidně nahrajte udělejte svou složku a pár jich tam nám a pro ostatní nahrajte. Je to Google disk, tak snad by to mělo fungovat a být jednoduchý, kdyby s tím byl problém, dejte vědět ;-): <a href="https://drive.google.com/drive/folders/1DdGKaMy6qoS1YdYkMLrzpGVAf9ah7D5P?usp=sharing" target="_blank"><u>Google Drive Link</u></a>
        </p>
      </div>

      <div className="my-2">
        <p ><b>Výběr fotek od paní fotografky</b> - Jakmile dostanu zpracované fotky, tak sem přidám další link s odkazem na tyto fotky...</p>
      </div>

    </div>
  );
}
