const students = [
    {fname: 'Pero', lname: 'Perovski', gpa: 9.2},
    {fname: 'Janko', lname: 'Jankovski', gpa: 7.0},
    {fname: 'Stanko', lname: 'Stankovski', gpa: 6.1},
];

const getAllStudents = (req, res) => {
    return res.status(200).send(students);
};

const getSingleStudent = (req, res) => {
    if(students[req.params.id] !== undefined){
        return res.status(200).send(students[req.params.id]);
    }
    return res.status(404).send('Not Found');
};

const createStudent = (req, res) => {
    if(req.body){
        students.push(req.body);
        return res.status(201).send('Created');
    }
    return res.status(400).send('Bad request');
};

const removeStudent = (req, res) => {
    const found = students.findIndex((studnet) =>{
        studnet.id === req.params.id
    })
    if (found) {
        students.splice(found, 1)
        res.status(200).json("Succesfully deleted")
    }
    else{
        res.status(400).json('Bad request, no data found!')
    }
};
  


// update needs the full student object
const updateStudent = (req, res) => {
    if(data.students[req.params.id] != undefined){
        if(req.body.fname != undefined && req.body.lname != undefined && req.body.gpa != undefined){
            var student = {
                fname: req.body.fname,
                lname: req.body.lname,
                gpa: req.body.gpa
};
    data.students[req.params.id] = student;
        return res.status(200).send("Succesfully updated");
        } else {
            return res.status(400).send("Bad request");
            }
        } else {
            return res.status(404).send("Not Found");
        }
    };


// patch needs whatever we give it to change
const patchStudent = (req, res) => {
    res.status(200).send('ok');
};

module.exports = {
    getAllStudents,
    getSingleStudent,
    createStudent,
    removeStudent,
    updateStudent,
    patchStudent,
};