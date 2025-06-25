interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({params}: PageProps) => {
    console.log("Server Component Rendered");
    const { videoId } = await params;
  return (
    // className="flex flex-col items-center justify-center h-screen"
    <div> 
      <p className="text-lg">Video ID {videoId}</p>
    </div>
  );
}

export default Page;