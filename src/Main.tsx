import './Main.css';
import Term from './Term';


interface GlossaryEntry {
  EnglishTerm: string;
  EnglishDefinition: string;
  ThaiTerm: string;
  ThaiDefinition: string;
}

const glossary: GlossaryEntry[] = [
  {
    EnglishTerm: "Arweave (AR)",
    EnglishDefinition:
      "The Arweave network is like Bitcoin, but for data: A permanent and decentralized web inside an open ledger.",
    ThaiTerm: "อาร์วีฟ",
    ThaiDefinition:
      "เป็นเหรียญดิจิทัลที่ใช้ในเครือข่าย Arweave ซึ่งเป็นเครือข่ายจัดเก็บข้อมูลแบบกระจายศูนย์..."
  },
  {
    EnglishTerm: "Book",
    EnglishDefinition: "Collection of pages",
    ThaiTerm: "หนังสือ",
    ThaiDefinition: "สิ่งพิมพ์ที่รวบรวมข้อมูล ความรู้ หรือเรื่องราวต่างๆ ไว้ในรูปแบบของแผ่นกระดาษหรือวัสดุอื่นๆ ที่นำมาเย็บรวมกันเป็นเล่ม หนังสือทำหน้าที่เป็นสื่อกลางในการถ่ายทอดความรู้ ประสบการณ์ ความคิด และจินตนาการของผู้เขียน เพื่อให้ผู้อ่านได้รับความรู้ ความบันเทิง หรือแรงบันดาลใจ"
  }
];

interface MainProps {
  searchTerm: string;
}

export default function Main({ searchTerm }: MainProps) {
  const filtered = glossary.find(entry => {
    const term = searchTerm.toLowerCase();
    return (
      entry.EnglishTerm.toLowerCase().includes(term) ||
      entry.ThaiTerm.toLowerCase().includes(term)
    );
  });

  const primary = filtered
    ? {
        term: filtered.EnglishTerm,
        pronunciation: undefined,
        definition: filtered.EnglishDefinition
      }
    : {
        term: "ไม่พบคำที่ค้นหา",
        pronunciation: undefined,
        definition: ""
      };

  const secondary = filtered
    ? {
        term: filtered.ThaiTerm,
        pronunciation: undefined,
        definition: filtered.ThaiDefinition
      }
    : {
        term: "",
        pronunciation: undefined,
        definition: ""
      };

  return (
    <div id="main">
      <Term
        term={primary.term}
        pronunciation={primary.pronunciation}
        definition={primary.definition}
      />
      <Term
        term={secondary.term}
        pronunciation={secondary.pronunciation}
        definition={secondary.definition}
      />
    </div>
  );
}
