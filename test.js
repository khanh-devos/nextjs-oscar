email_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$/;
email = 'k@gmail.com'.match(email_regex);
mobile_regex = /^[+\d]{1,3}[-\s]{1}[\d]{10}$/;
phone = '+84 0703601738'.match(mobile_regex);
pass_1_lower_1_upper_regex = /^(?=.*[A-Z])+(?=.*[a-z])+$/;
pass_1_num_1_char_min_8_regex = /^((?=.*[0-9])+(?=.*[a-z])+)^.{8,}$/;
pass_combine_regex = /^(?=(.*[0-9]))+(?=.*[A-Za-z0-9])+(?=.*[A-Z])+(?=.*[a-z])+^.{7,}$/; 
pass = '12345678'.match(pass_1_num_1_char_min_8_regex);
console.log(pass);