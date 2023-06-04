INSERT INTO department (id,name)
VALUES ('Sales'),
        ('Freight'),
        ('Janitorial'),
        ('Customer Service'),
        ('Management');

INSERT INTO role (title, salary, department_id)
VALUES('FloorStaff', 15.00, 1),
    ('Forklift Operator', 17.50, 2),
    ('Janitor', 14.50, 3),
    ('Customer Representative', 15.75, 4),
    ('Supervisor', 20.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    (001, 'Jack', 'Sparrow', 002,007),
     (002, 'Elizabet', 'Swan', 004,012),
      (003, 'Davey', 'Jones', 003,014),
       (004, 'Dwayne', 'Johnson', 002,007),
        (005, 'Alexa', 'Trebute', 001,009),
         (006, 'Kelly', 'Ann-Conman', 001,009),
          (007, 'Gilbert', 'Grape', 005),
           (008, 'Vin', 'Propane', 003,014),
            (009, 'Jeff', 'Hardy', 005),
             (010, 'Michael', 'Fenderbender', 002,007),
              (011, 'Stoic', 'Aristostoclites', 005),
               (012, 'Guy', 'Guyman', 005),
                (013, 'Naruto', 'Uzamaki', 001,009),
                 (014, 'Mary', 'Shelly', 005);