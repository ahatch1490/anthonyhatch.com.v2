<template>
<div class=" m-5">
    <div class="border-2 rounded border-gray-300 my-3 p-3">
        <h1 class="font-semibold text-2xl ">Full Stack Engineer</h1>
        <p>15 plus years of finding solutions, and deleting code.</p>
    </div>
    <div class="grid  place-items-center border-2 rounded border-gray-300 my-3 p-3 " :key="item.title"  v-for="item in data">

        <img  :src="item.src" class="w-40 min-h-30" />
        <h1 class="font-semibold text-2xl ">{{item.title}}</h1>

        <p >{{item.jobTitle}}</p>
        <p>from:         {{item.startYear}}
            to: {{item.endYear}}</p>
        <p > {{item.jobDescription}} </p>
    </div>
</div>
</template>

<script setup lang="ts">

const data = [
    {
        title:"Imperative",
        startYear:"2022",
        endYear:"Present",
        src:"/images/Experience/imperative_logo.png",
        jobTitle:"Sr. Software Engineer",
        jobDescription:"Worked on the team that architected and deploy the new version of the Imperative platform. This included a new API, a new web application,  The new platform is built on a microservice architecture using Azure Services, postgres, Vue.js C#."
    },
    {
        title:"QuoteWizard",
        startYear:"2019",
        endYear:"2022",
        src:"/images/Experience/qw-lt-color.svg",
        jobTitle:"Team Lead",
        jobDescription:"Lead two teams of developers on client facing applications and services. Responsibilities included Working with the product owner to define and prioritize work.  Working with the DevOps team to ensure a smooth deployment process. Working with the business to ensure the product was meeting their needs. Working with the team to ensure they had the tools and knowledge to do their jobs, SQLServer C# and Vue.js."
    },
    {
        title:"MoxiWorks",
        startYear:"2015",
        endYear:"2019",
        src:"/images/Experience/MoxiWorks_logo.png",
        jobTitle:"Sr. Software Engineer",
        jobDescription:"Maintained and developed new features for the MoxiWorks platform. The platform is built on a microservice architecture using AWS Services, postgres, Vue.js and Ruby On Rails."
    },
    {
        title:"PayTrace",
        startYear:"2011",
        endYear:"2015",
        src:"/images/Experience/paytrace.svg",
        jobTitle:"Sr. Software Engineer",
        jobDescription:"Maintained and developed new features for the PayTrace platform, postgres, VB Script, Ruby On Rails and Python."
    },
    {
        title:"Western Washington University",
        startYear:"2000",
        endYear:"2004",
        src:"/images/Experience/westernlogo_med.png",
        jobTitle:"BS in Computer Science",
        jobDescription:"Great school, great teachers, great friends."
    },

];
</script>

<style scoped>

</style>
