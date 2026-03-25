-- Insert Categories
insert into categories (id, name, description, image_url) values
  ('a1000000-0000-0000-0000-000000000001', 'Antibiotics', 'Medicines that kill or inhibit bacteria', 'https://res.cloudinary.com/demo/image/upload/v1/samples/medicine/antibiotics.jpg'),
  ('a1000000-0000-0000-0000-000000000002', 'Pain Relief', 'Medicines for pain management', 'https://res.cloudinary.com/demo/image/upload/v1/samples/medicine/painrelief.jpg'),
  ('a1000000-0000-0000-0000-000000000003', 'Vitamins & Supplements', 'Nutritional support products', 'https://res.cloudinary.com/demo/image/upload/v1/samples/medicine/vitamins.jpg'),
  ('a1000000-0000-0000-0000-000000000004', 'Diabetes Care', 'Medicines for blood sugar management', 'https://res.cloudinary.com/demo/image/upload/v1/samples/medicine/diabetes.jpg'),
  ('a1000000-0000-0000-0000-000000000005', 'Heart & Blood Pressure', 'Cardiovascular medicines', 'https://res.cloudinary.com/demo/image/upload/v1/samples/medicine/heart.jpg');

-- Antibiotics
insert into medicines (name, generic_name, description, price, manufacturer, requires_prescription, in_stock, category_id) values
  ('Amoxil 500mg', 'Amoxicillin', 'Broad-spectrum antibiotic for bacterial infections', 12.50, 'GSK', true, true, 'a1000000-0000-0000-0000-000000000001'),
  ('Augmentin 625mg', 'Amoxicillin + Clavulanate', 'Used for resistant bacterial infections', 18.00, 'GSK', true, true, 'a1000000-0000-0000-0000-000000000001'),
  ('Zithromax 250mg', 'Azithromycin', 'Antibiotic for respiratory infections', 22.00, 'Pfizer', true, false, 'a1000000-0000-0000-0000-000000000001'),
  ('Cipro 500mg', 'Ciprofloxacin', 'Antibiotic for urinary tract infections', 15.75, 'Bayer', true, true, 'a1000000-0000-0000-0000-000000000001'),
  ('Flagyl 400mg', 'Metronidazole', 'Antibiotic for anaerobic infections', 9.00, 'Sanofi', true, true, 'a1000000-0000-0000-0000-000000000001');

-- Pain Relief
insert into medicines (name, generic_name, description, price, manufacturer, requires_prescription, in_stock, category_id) values
  ('Panadol 500mg', 'Paracetamol', 'Common painkiller and fever reducer', 4.50, 'GSK', false, true, 'a1000000-0000-0000-0000-000000000002'),
  ('Brufen 400mg', 'Ibuprofen', 'Anti-inflammatory pain relief', 6.00, 'Abbott', false, true, 'a1000000-0000-0000-0000-000000000002'),
  ('Voltaren 50mg', 'Diclofenac', 'Pain relief for joints and muscles', 11.00, 'Novartis', false, true, 'a1000000-0000-0000-0000-000000000002'),
  ('Cataflam 25mg', 'Diclofenac Potassium', 'Fast-acting pain and inflammation relief', 13.50, 'Novartis', false, false, 'a1000000-0000-0000-0000-000000000002'),
  ('Tramadol 50mg', 'Tramadol HCL', 'Strong pain reliever for moderate to severe pain', 19.00, 'Mundipharma', true, true, 'a1000000-0000-0000-0000-000000000002');

-- Vitamins
insert into medicines (name, generic_name, description, price, manufacturer, requires_prescription, in_stock, category_id) values
  ('Vitamin C 1000mg', 'Ascorbic Acid', 'Immune system booster', 7.00, 'Roche', false, true, 'a1000000-0000-0000-0000-000000000003'),
  ('Vitamin D3 5000IU', 'Cholecalciferol', 'Bone health and immunity support', 10.00, 'Now Foods', false, true, 'a1000000-0000-0000-0000-000000000003'),
  ('Omega-3 1000mg', 'Fish Oil', 'Heart and brain health supplement', 14.00, 'Nordic Naturals', false, true, 'a1000000-0000-0000-0000-000000000003'),
  ('Zinc 50mg', 'Zinc Gluconate', 'Immune and skin health support', 6.50, 'Solgar', false, false, 'a1000000-0000-0000-0000-000000000003'),
  ('B-Complex', 'B Vitamins Blend', 'Energy and nervous system support', 9.50, 'Centrum', false, true, 'a1000000-0000-0000-0000-000000000003');

-- Diabetes Care
insert into medicines (name, generic_name, description, price, manufacturer, requires_prescription, in_stock, category_id) values
  ('Glucophage 500mg', 'Metformin', 'First-line treatment for type 2 diabetes', 8.00, 'Merck', true, true, 'a1000000-0000-0000-0000-000000000004'),
  ('Diamicron 30mg', 'Gliclazide', 'Controls blood sugar in type 2 diabetes', 16.00, 'Servier', true, true, 'a1000000-0000-0000-0000-000000000004'),
  ('Januvia 100mg', 'Sitagliptin', 'DPP-4 inhibitor for blood sugar control', 45.00, 'MSD', true, false, 'a1000000-0000-0000-0000-000000000004'),
  ('Lantus Solostar', 'Insulin Glargine', 'Long-acting insulin for diabetes', 55.00, 'Sanofi', true, true, 'a1000000-0000-0000-0000-000000000004'),
  ('Acarbose 50mg', 'Acarbose', 'Slows carbohydrate absorption', 12.00, 'Bayer', true, true, 'a1000000-0000-0000-0000-000000000004');

-- Heart & Blood Pressure
insert into medicines (name, generic_name, description, price, manufacturer, requires_prescription, in_stock, category_id) values
  ('Concor 5mg', 'Bisoprolol', 'Beta-blocker for high blood pressure', 14.00, 'Merck', true, true, 'a1000000-0000-0000-0000-000000000005'),
  ('Norvasc 5mg', 'Amlodipine', 'Calcium channel blocker for hypertension', 11.50, 'Pfizer', true, true, 'a1000000-0000-0000-0000-000000000005'),
  ('Crestor 10mg', 'Rosuvastatin', 'Lowers cholesterol levels', 28.00, 'AstraZeneca', true, false, 'a1000000-0000-0000-0000-000000000005'),
  ('Plavix 75mg', 'Clopidogrel', 'Prevents blood clots', 32.00, 'Sanofi', true, true, 'a1000000-0000-0000-0000-000000000005'),
  ('Tritace 5mg', 'Ramipril', 'ACE inhibitor for blood pressure', 17.00, 'Sanofi', true, true, 'a1000000-0000-0000-0000-000000000005');