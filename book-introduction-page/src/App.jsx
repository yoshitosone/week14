import BookCard from './components/BookCard';

const books = [
  {
    id: 1,
    title: "学問のすゝめ",
    author: "福澤諭吉",
    rating: "★★★★★",
    comment: "「天は人の上に人を造らず」の一節で有名。学ぶことの意味を説いた名著。",
  },
  {
    id: 2,
    title: "福翁自伝",
    author: "福澤諭吉",
    rating: "★★★★☆",
    comment: "福澤諭吉自身の半生記。激動の幕末〜明治を生きた人物像が伝わってくる。",
  },
  {
    id: 3,
    title: "お金の大学",
    author: "両＠リベラルアーツ大学",
    rating: "★★★★★",
    comment: "貯める・稼ぐ・増やす・守る・使うの5つの力を体系的に学べる、お金の入門書。",
  },
];

function Header() {
  const title = "わたしの本棚";

  return (
    <header>
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}

function App() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <Header />
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
    </main>
  );
}

export default App;