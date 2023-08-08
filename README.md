# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Process and What I learned](#process-and-what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/NinjaNas/news-homepage-main/assets/54213302/2e27154c-6b26-4692-b773-6eabc05054d5)

### Links

- Solution URL: [Solution Page](https://www.frontendmentor.io/solutions/newshomepagemain-pIbS1KdMst)
- Live Site URL: [Vercel](https://news-homepage-main-neon-pi.vercel.app/)
- DockerHub: [Container](https://hub.docker.com/repository/docker/ninjanas/news-homepage-main/general)

## My process

### Built with

- Solid JS
- Solid JS Router
- Tailwind
- CSS custom properties
- Flexbox/Grid
- Docker
  - Docker Hub (optional)
    - docker pull ninjanas/news-homepage-main:dev
  - Build Locally
    - Build image: docker build -t ninjanas/news-homepage-main:dev .
    - Build image in docker-compose: docker-compose build
  - Start container
    - docker-compose up

### Process and What I learned

I had some fun learning SolidJS and TailwindCSS. I learned a lot about how CSS Grid and Flexbox work and learned how to create responsive designs for different screens. I also went the extra step and adding some basic routing with SolidJS Router. I worked to create a simple and scalable workflow in case you needed to add more articles to the news site.

I learned and compared the differences between SolidJS and NextJS/React. For example, in SolidJS you should not destructure props because they would lose reactivity. Also, SolidJS is complied and has no virtual DOM unlike React. It does its rerenders by looking at what state has changed and surgically inserting it in the correct location in the DOM. This means the components do not have to fully rerender all of their code, only the state that changes need to rerender. This means you can have setInterval and setTimeout at the top of the component and have no unwanted side effect unlike React which would rerender them and cause an infinite loop.

I also containerized the development server for practice with Docker. I used docker-compose with volumes to able to hot-reload my docker container when I update my files locally. The local image is also on DockerHub.

### Continued development

I would add more detail to the other navbar tabs and the article pages.

## Author

- Frontend Mentor - [@NinjaNas](https://www.frontendmentor.io/profile/NinjaNas)
