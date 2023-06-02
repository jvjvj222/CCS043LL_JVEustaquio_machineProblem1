// CCS0043L Source code Template for 2T AY 2021-2023
/*
	Program : Computation of Grades using Function
	Programmer : John Valrie Eustaquio
	Section : Irregular
	Start Date : June 2, 2023
	End Date : June 2, 2023
*/



function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function calculateLetterGrade(grade) {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

function prompt(question) {
  return new Promise((resolve) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function displayResults(students) {
  console.log('Name\t\tClass Participation\tSummative Grade\tExam Grade\tGrade Score\tLetter Grade');
  console.log('---------------------------------------------------------------------------------');
  students.forEach((student) => {
    console.log(
      `${student.name}\t\t${student.classParticipation.toFixed(0)}\t\t\t${student.summativeGrade.toFixed(
        0
      )}\t\t${student.majorExamGrade.toFixed(0)}\t\t${student.grade.toFixed(0)}\t\t${student.letterGrade}`
    );
  });
}

async function calculateGrades() {
  const students = [];

  for (let i = 0; i < 5; i++) {
    const student = {};
    student.name = await prompt(`Enter the name of student ${i + 1}: `);
    student.enablingAssessments = [];
    student.summativeAssessments = [];

    for (let j = 0; j < 5; j++) {
      let enablingGrade;
      do {
        enablingGrade = Number(await prompt(`Enter enabling assessment ${j + 1}: `));
        if (enablingGrade > 100) {
          console.log('Error: Grade cannot exceed 100.');
        }
      } while (enablingGrade > 100);
      student.enablingAssessments.push(enablingGrade);
    }

    for (let k = 0; k < 3; k++) {
      let summativeGrade;
      do {
        summativeGrade = Number(await prompt(`Enter summative assessment ${k + 1}: `));
        if (summativeGrade > 100) {
          console.log('Error: Grade cannot exceed 100.');
        }
      } while (summativeGrade > 100);
      student.summativeAssessments.push(summativeGrade);
    }

    let majorExamGrade;
    do {
      majorExamGrade = Number(await prompt(`Enter major exam grade for ${student.name}: `));
      if (majorExamGrade > 100) {
        console.log('Error: Grade cannot exceed 100.');
      }
    } while (majorExamGrade > 100);
    student.majorExamGrade = majorExamGrade;

    student.classParticipation = calculateAverage(student.enablingAssessments);
    student.summativeGrade = calculateAverage(student.summativeAssessments);
    student.grade =
      student.classParticipation * 0.3 +
      student.summativeGrade * 0.3 +
      student.majorExamGrade * 0.4;
    student.letterGrade = calculateLetterGrade(student.grade);

    students.push(student);
  }

  displayResults(students);
}

calculateGrades();
