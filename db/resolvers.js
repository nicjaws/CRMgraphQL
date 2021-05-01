

const courses = [
    {
        title: 'Javascript Modern guide +10 Projects',
        technology: 'Javascript ES6',
    },
    {
        title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
        technology: 'React',
    },
    {
        title: 'Node.js – Bootcamp Web Developer inc. MVC y REST API’s',
        technology: 'Node.js'
    },
    {
        title: 'ReactJS Advanced – FullStack React GraphQL y Apollo',
        technology: 'React'
    }
];

// Resolvers
const resolvers = {
  Query: {
    obtainCourses: (_, {input}, ctx) => {
      const result = courses.filter(course => course.technology === input.technology);

      return result;
    }
  }
}

module.exports = resolvers;
