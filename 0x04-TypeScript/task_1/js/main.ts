interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }
interface Directors extends Teacher {
  numberOfReports: number;
  }
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  }
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}. ${lastName}`;
    };    
class StudentClass {
    private firstname: string;
    private lastname: string;
    constructor (firstName: string,lastName: string) {
      this.firstname = firstName;
      this.lastname = lastName;
    }
    public workOnHomewor() {
      return ('Currently working');
    }
    public displayName() {
      return (this.firstname);
    }
  };
