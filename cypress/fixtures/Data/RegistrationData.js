class RegistrationData{
    userName(){
        let names = ['John', 'Steven', 'Peter', 'Jennifer', 'Monica', 'Brad', 'Kathy', 'Angelica', 'Charles'];
        let name = names[Math.floor(Math.random()*names.length)];
        return name;
    }
    userLastName(){
        let lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
        let lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
        return lastName;
    }
    userPassword(){
        const password = 'Tester123';
        return password;
    }
    userEmail(){
        let number = Math.round(Math.random() * 10000);
        let email = 'user' + number + '@example.com';
        return email;
    }
    userPhone(){
        let phone = Math.round(Math.random()*(999999999 - 100000000 +1) + 100000000);
        return phone;
    }
    userPostCode(){
        let PostCode = Math.round(Math.random()*(99999 - 10000 +1) + 10000);
        return PostCode;
    }
    userGender(){
        const sex = ['male', 'female'];
        let gender = sex[Math.floor(Math.random()*sex.length)];
        return gender;
    }
    userAgreements(){
        let agreements = ['yes', 'no'];
        let agreement = agreements[Math.floor(Math.random()*agreements.length)];
        return agreement;
    }
    userCity(){
        let cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
        let city = cities[Math.floor(Math.random()*cities.length)];
        return city;
    }
    userState(){
        let states = ['New York', 'California', 'Illinois', 'Texas', 'Arizona', 'Pennsylvania'];
        let state = states[Math.floor(Math.random()*states.length)];
        return state;
    }
    userStreet(){
        let addresses = ['Long Street', 'Circle Way', 'Boar Lane', 'Church Way', 'Preston Rd', 'Mounthoolie Lane', 'York Road'];
        let address = addresses[Math.floor(Math.random()*addresses.length)];
        let nr = Math.floor(Math.random()*900).toString();
        let street = address + ' ' + nr;
        return street;
    }
    invalidData(){
        let invalidData = ['1234', '@', 'abcd', '#$%'];
        let invalidInput = invalidData[Math.floor(Math.random()*invalidData.length)];
        return invalidInput;
    }
    setMonth(){
        let month = Math.floor(Math.random() * 12 + 1).toString();
        return month;
    }
    setYear(){
        let year = Math.round(Math.random() * (2022 - 1900 +1) + 1900).toString();
        return year;
    }
    setDay(){
        let day = Math.floor(Math.random() * 28 + 1).toString();
        return day;
    }
}
export default RegistrationData;