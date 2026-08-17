import Studio from "./studio";
export const dynamic = "force-dynamic";
export default function Admin() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    return (
      <section className="container min-h-screen pt-40">
        <p className="eyebrow">Studio setup required</p>
        <h1 className="serif mt-5 text-5xl">Connect your Sanity project.</h1>
        <p className="mt-6 max-w-xl leading-7 text-white/55">
          Create a free Sanity project, copy its project ID into{" "}
          <code>.env.local</code> as <b>NEXT_PUBLIC_SANITY_PROJECT_ID</b>, then
          restart the site. Sanity supplies secure accounts, drafts, previews
          and media delivery.
        </p>
      </section>
    );
  return <Studio />;
}
