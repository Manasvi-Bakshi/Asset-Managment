const express = require("express");
const app = express()

app.use(express.json());

// JSON
const employees = require('./employees.json');
const assetsData = require('./assets.json');

// Basic GET
app.get('/',(req, res) =>{
    res.send("Do not disturb");
});

app.get('/employees',(req, res) =>{
    res.json(employees);
});

app.get('/assets',(req, res) =>{
    res.json(assetsData.assets);
});

// Read 
app.get('/employees/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.EUid === id);
    if (!employee){
        return res.status(404).json({message:"Employee not found"});
    }
    res.json(employee)
});

app.get('/assets/:id', (req, res)=>{
    const id = req.params.id;
    const asset = assetsData.assets.find(a => a.id === id);
    if (!asset){
        return res.status(404).json({message:"Asset not found"});
    }
    res.json(asset);
});

// Create
app.post('/employees', (req,res) => {
    const { firstName, lastName, email, position, active } = req.body;
    const newId = employees.length > 0
        ? Math.max(...employees.map(emp => emp.EUid)) + 1
        : 1;
    const newEmployee = {
        EUid: newId,
        firstName,
        lastName,
        email,
        position,
        active
    };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});

app.post('/assets', (req,res) => {
    const { type, make, model, serial, purchase_date, warranty_expiry, assigned_to, status, notes } = req.body;
    const ids = assetsData.assets.map(a => a.id);
    const nums = ids.map(id => parseInt(id.replace("ASSET-","")));
    const nextnum = Math.max(...nums) + 1;
    const newAssetId = "ASSET-" + String(nextnum)
    const newAsset = {
        id: newAssetId,
        type,
        make,
        model,
        serial,
        purchase_date,
        warranty_expiry,
        assigned_to,
        status,
        notes
    }
    assetsData.assets.push(newAsset);
    res.status(201).json(newAsset);
});

// Update
app.put('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employees.find(emp => emp.EUid === id);
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    const { firstName, lastName, email, position, active } = req.body;
    if (firstName !== undefined) employee.firstName = firstName;
    if (lastName !== undefined) employee.lastName = lastName;
    if (email !== undefined) employee.email = email;
    if (position !== undefined) employee.position = position;
    if (active !== undefined) employee.active = active;
    res.json({ message: "Employee updated", employee });
});

app.put('/assets/:id', (req, res) => {
    const id = req.params.id;  
    const asset = assetsData.assets.find(a => a.id === id);
    if (!asset) {
        return res.status(404).json({ message: "Asset not found" });
    }
    const { type, make, model, serial, purchase_date, warranty_expiry, assigned_to, status, notes } = req.body;
    if (type !== undefined) asset.type = type;
    if (make !== undefined) asset.make = make;
    if (model !== undefined) asset.model = model;
    if (serial !== undefined) asset.serial = serial;
    if (purchase_date !== undefined) asset.purchase_date = purchase_date;
    if (warranty_expiry !== undefined) asset.warranty_expiry = warranty_expiry;
    if (assigned_to !== undefined) asset.assigned_to = assigned_to;
    if (status !== undefined) asset.status = status;
    if (notes !== undefined) asset.notes = notes;
    res.json({ message: "Asset updated", asset });
});

// Delete
app.delete('/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const employeeIndex = employees.findIndex(emp => emp.EUid === id);
    if (employeeIndex === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }
    employees.splice(employeeIndex, 1);
    res.json({ message: `Employee ${id} deleted successfully` });
});

app.delete('/assets/:id', (req, res) => {
    const id = req.params.id;  
    const assetIndex = assetsData.assets.findIndex(a => a.id === id);
    if (assetIndex === -1) {
        return res.status(404).json({ message: "Asset not found" });
    }
    assetsData.assets.splice(assetIndex, 1);
    res.json({ message: `Asset ${id} deleted successfully` });
});


// Start
app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});
