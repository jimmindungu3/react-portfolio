import React from "react";

const Skills = () => {
  return (
    <div className="px-4 mb-36 mt-36 text-gray-200 max-w-96 mx-auto rounded-md md:max-w-6xl md:mb-16">
      <div>
        <h1 className="mb-8 text-gray-200 font-bold text-center text-2xl">
          Skills and Tools
        </h1>
        <p>
          I am a skilled fullstack software developer with expertise spanning
          frontend development, backend development, and database design and
          management. My experience includes crafting responsive and dynamic
          user interfaces, building robust server-side applications, and
          designing efficient database architectures.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-y-8 mt-8">
        <div>
          <h1 className="text-lg font-semibold mb-4 md:text-xl md:font-bold">
            Frontend
          </h1>
          <div className="space-y-2 md:pl-8">
            <img
              src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
              alt="html"
            />
            <img
              src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
              alt="css"
            />
            <img
              src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="tailwind"
            />
            <img
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="javascript"
            />
            <img
              src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              alt="react"
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4 md:text-xl md:font-bold">
            Backend
          </h1>
          <div className="space-y-2 md:pl-8">
            <img
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="node js"
            />
            <img
              src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
              alt="express js"
            />
            <img
              src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
              alt="python"
            />
            <img
              src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white"
              alt="django"
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4 md:text-xl md:font-bold">
            Databases
          </h1>
          <div className="space-y-2 md:pl-8">
            <img
              src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="mongodb"
            />
            <img
              src="https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="mysql"
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4 md:text-xl md:font-bold">
            Tools
          </h1>
          <div className="space-y-2 md:pl-8">
            <img
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              alt="git"
            />
            <img
              src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
              alt="github"
            />
            <img
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
              alt="postman"
            />
            <img
              src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
              alt="vs code"
            />
          </div>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4 md:text-xl md:font-bold">
            Deployment
          </h1>
          <div className="space-y-2 md:pl-8">
            <img
              src="https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white"
              alt="render"
            />
            <img
              src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
              alt="vercel"
            />
            <img
              src="https://img.shields.io/badge/MongoDB_Atlas-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="MongoDB Atlas"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
