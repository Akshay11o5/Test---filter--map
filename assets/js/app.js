cl = console.log;

companies = [
  { name: "Company One", id: "1", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", id: "2", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", id: "3", category: "Auto", start: 1999, end: 2007 },
  {
    name: "Company Four",
    id: "4",
    category: " ReTail",
    start: 1989,
    end: 2010,
  },
  {
    name: "Company Five",
    id: "5",
    category: "Technology",
    start: 2009,
    end: 2014,
  },
  { name: "Company Six", id: "6", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: "7", category: "Auto", start: 1986, end: 1996 },
  {
    name: "Company Eight",
    id: "8",
    category: "Technology",
    start: 2011,
    end: 2016,
  },
  { name: "Company Nine", id: "9", category: "retail", start: 1981, end: 1989 },
];

// -------------------------------------------------------------

// create a array of compnay names
// like  [
//     "Company One" , "Company Two", "Company Three","Company Four",
// ]

let companyArray = companies.map((comp) => {
  return comp.name;
});

cl(companyArray);

// create a array of comp with 2 key compName and startYear
// like // [
//     {
//         compName : "Company One",
//         startYear : 1981
//     }
// ]

let result = companies.map((comp) => {
  return {
    compName: comp.name,
    startYear: comp.start,
  };
});

cl(result);

// create a new array like
// [
//     {
//         compName : 'Company One',
//         lifeSpan : '1981 - 2003'
//     }
// ]

let result1 = companies.map((comp) => {
  return {
    compName: comp.name,
    lifeSpan: `${comp.start} - ${comp.end}`,
  };
});

cl(result1);

// new arr of comp who run for at least 10 years

let result2 = companies.filter((comp) => {
  return comp.end - comp.start >= 10;
});

cl(result2);
//  arr of comp who starts in 80s

let result3 = companies.filter((comp) => {
  return comp.start > 1979 && comp.start < 1990;
});
cl(result3);

// How would you find all companies in the "Retail" category, ensuring the comparison is case-insensitive?

let result4 = companies.filter((comp) => {
  return comp.category.toLocaleLowerCase().includes("retail");
});

cl(result4);

// How can you create a new array containing just the names of the companies?

let result5 = companies.map((comp) => {
  return {
    Name: comp.name,
  };
});

cl(result5);

// How can you extract only the companies that started operating before the year 1990?

let result6 = companies.filter((comp) => {
  return comp.start < 1990;
});

cl(result6);

// How would you transform the data to include only the id and name properties for each company?

let result7 = companies.map((comp) => {
  return {
    id: comp.id,
    name: comp.name,
  };
});

cl(result7);

// How can you determine which companies operated for more than 10 years?

let result8 = companies.filter((comp) => {
  return comp.end - comp.start > 10;
});

cl(result8);

// How can you generate a list showing the number of years each company was in operation?

let result9 = companies.map((comp) => {
  return {
    companyName: comp.name,
    inOperation: comp.end - comp.start,
  };
});

cl(result9);

// What approach would you use to identify companies whose names include the word "Company"?

let result10 = companies.filter((comp) => {
  return comp.name.toLocaleLowerCase().includes("company");
});
cl(result10);

// What steps would you take to convert all company names to uppercase in a new array?

let result11 = companies.map((comp) => {
  return {
    name: comp.name.toUpperCase(),
    id: comp.id,
    category: comp.category,
    start: comp.start,
    end: comp.end,
  };
});

cl(result11);

// How would you get a list of companies that started between the years 2000 and 2009?

let result12 = companies.filter((comp) => {
  return comp.start > 2000 && comp.start < 2009;
});

cl(result12);

// How would you create a new list of strings in this format: "Company [Name] operated in [Category]."?

let result13 = companies.map((comp) => {
  return {
    company: `company  ${comp.name}  operated in +${comp.category}`,
  };
});

cl(result13);

// How would you find all companies in the "Technology" category and then create a list of their names?

let result14 = companies.filter((comp) => {
  return comp.category.toLocaleLowerCase().includes("technology");
});

result15 = result14.map((comp) => {
  return {
    Name: comp.name,
  };
});

cl(result15);

// What steps would you take to find companies that started after 1990 and then display their names alongside their start years?

result16 = companies
  .filter((comp) => {
    return comp.start > 1990;
  })
  .map((comp) => {
    return {
      startYear: comp.start,
      name: comp.name,
    };
  });

cl(result16);
// How can you identify companies that operated for more than 20 years and then extract their names and categories?

result17 = companies
  .filter((comp) => {
    return comp.end - comp.start > 20;
  })
  .map((comp) => {
    return {
      name: comp.name,
      category: comp.category,
    };
  });

cl(result17);

// How would you list companies that ended after 2010 in a format like "[Name] ended in [Year]."?

let result18 = companies
  .filter((comp) => {
    return comp.end > 2010;
  })
  .map((comp) => {
    return {
      ended: `${comp.name} ended in ${comp.end}`,
    };
  });

cl(result18);

// How would you first find companies in the "Auto" category and then create a list of their ids?

let result19 = companies
  .filter((comp) => {
    return comp.category.toLocaleLowerCase().includes("auto");
  })
  .map((comp) => {
    return {
      listOfId: comp.id,
    };
  });

cl(result19);
