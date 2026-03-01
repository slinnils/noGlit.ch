import BlogPost from "./BlogPost.jsx";

export default function Blog() {
  return (
    <section className="flex flex-col items-center gap-10">
      <div className="w-[40vw] mb-10">
        <h1 className="text-lab-text-bright text-5xl font-bold mb-5">
          noGlit.ch Blog
        </h1>
        <p>
          Auf diesem Blog berichte ich über meinen Weg zum Webdeveloper. Ich
          werde über wichtige Meilensteine und Hürden auf meinem Weg berichten
          und weitere Updates posten.
        </p>
      </div>

      <BlogPost />
    </section>
  );
}
