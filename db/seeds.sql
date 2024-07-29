INSERT INTO departments (department_name)
VALUES 
('Executive Board'),
('Marketing'),
('Human Resources'),
('Finance'),
('Engineering'),
('Information Technology'),
('Customer Relations'),
('Research and Development'),
('Legal'),
('Maintenance');

INSERT INTO roles (title)
VALUES 
('Marketing Manager'),
('HR Director'),
('Senior Engineer'),
('Customer Relations Manager'),
('Maintenance Manager');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tom', 'Brady', 1, 1),
('Thomas', 'The Tank Engine', 2, 2),
('Thomas', 'Calle', 3, 3),
