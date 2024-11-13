import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-16 gap-4">
        <div className="flex gap-2 items-center justify-center">
          <h1 className="font-bold text-white text-3xl">Get Me a Chai</h1>
          <img width={88} src="/tea.gif" alt="" />
        </div>
        <p className="px-4 sm:px-1 text-white">A crowndfunding platform for creators to fund their projects.</p>
        <p className="px-4 sm:px-1 text-white">A place where your fans can buy you a chai. Unleash the power of your fans and get your projects funded.</p>
        <div>
          <Link href={'/login'}>  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Start Here</button></Link>

          <Link href={'/about'}>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-1">Read More</button></Link>
        </div>
        <div className="bg-white opacity-5 h-1 w-full"></div>
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="font-bold text-white text-xl mb-10">Your Fans can buy you a Chai</h1>
          <div className="text-white flex flex-col sm:flex-row justify-between gap-10 mb-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-400 rounded-full w-12"><img width={44} src="man.gif" alt="" /></div>
              <h2 className="font-bold space-y-2">Fans want to help</h2>
              <p>Your fans are availabe to support you</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-400 rounded-full w-12"> <img width={44} src="coin.gif" alt="" /></div>
              <h2 className="font-bold space-y-2">Fans want to contribute</h2>
              <p>Your fans are willing to contribute financially</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-400 rounded-full w-12"><img width={44} src="group.gif" alt="" /></div>
              <h2 className="font-bold">Fans want to collaborate</h2>
              <p>Your fans are ready to collaborate you</p>
            </div>

          </div>
          <div className="bg-white opacity-5 h-1 w-full"></div>
          {/* Last Section */}
          <div className="flex flex-col justify-center items-center mb-10">
            <h2 className="font-bold text-white text-xl my-8">Learn More.</h2>
            <iframe className="w-full" src="https://www.youtube.com/embed/8-EyxMuvE9A?si=Keql_tyauK8hshRr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
