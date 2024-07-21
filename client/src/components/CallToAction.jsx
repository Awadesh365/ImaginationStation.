import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Visit GitHub</h2>
        <p className="text-gray-500 my-2"></p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/awadesh365"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit GitHub
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/270px-GitHub_Invertocat_Logo.svg.png"
          alt="https://github.githubassets.com/assets/launch-codes-mona-fallback@1x-baf96e8322b3.jpg"
        />
      </div>
    </div>
  );
}
