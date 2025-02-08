// Source of the questions
// https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test
// PDF: https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf
// TXT: https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.txt
let questions = [
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "1. What is the supreme law of the land?", ["the Constitution"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "2. What does the Constitution do?", ["sets up the government", "defines the government", "protects basic rights of Americans"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "3. The idea of self-government is in the first three words of the Constitution. What are these words?", ["We the People"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "4. What is an amendment?", ["a change (to the Constitution)", "an addition (to the Constitution)"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "5. What do we call the first ten amendments to the Constitution?", ["the Bill of Rights"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "6. What is one right or freedom from the First Amendment?", ["speech", "religion", "assembly", "press", "petition the government"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "7. How many amendments does the Constitution have?", ["twenty-seven (27)"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "8. What did the Declaration of Independence do?", ["announced our independence (from Great Britain)", "declared our independence (from Great Britain)", "said that the United States is free (from Great Britain)"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "9. What are two rights in the Declaration of Independence?", ["life", "liberty", "pursuit of happiness"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "10. What is freedom of religion?", ["You can practice any religion, or not practice a religion."]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "11. What is the economic system in the United States", ["capitalist econom", "market econom"]],
  [ "AMERICAN GOVERNMENT", "A: Principles of American Democracy", "12. What is the 'rule of law'", ["Everyone must follow the law", "Leaders must obey the law", "Government must obey the law", "No one is above the law"]],
  [ "AMERICAN GOVERNMENT", "B: System of Government", "13. Name one branch or part of the government", [ "Congress", "legislative", "President", "executive", "the courts", "judicial"]],
  [ "AMERICAN GOVERNMENT", "B: System of Government", "14. What stops one branch of government from becoming too powerful?", [ "checks and balances", "separation of powers"]],
  [ "AMERICAN GOVERNMENT", "B: System of Government", "15. Who is in charge of the executive branch?", [ "the President"]],
  [ "AMERICAN GOVERNMENT", "B: System of Government", "16. Who makes federal laws?", [ "Congress", "Senate and House (of Representatives)", "(U.S. or national) legislature"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "17. What are the two parts of the U.S. Congress?", [ "the Senate and House (of Representatives)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "18. How many U.S. Senators are there?", ["one hundred (100)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "19. We elect a U.S. Senator for how many years?", ["six (6)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "20. Who is one of your state's U.S. Senators now?", ["Maria Cantwell", "Patty Murray"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "21. The House of Representatives has how many voting members?", ["four hundred thirty-five (435)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "22. We elect a U.S.  Representative for how many years?", ["two (2)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "23. Name your U.S.  Representative.", ["Suzan DelBene"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "24. Who does a U.S. Senator represent?", ["all people of the state"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "25. Why do some states have more Representatives than other states?", ["(because of) the state's population", "(because) they have more people", "(because) some states have more people"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "26. We elect a President for how many years?", [ "four (4)"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "27. In what month do we vote for President?", [ "November"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "28. What is the name of the President of the United States now?", ["Donald Trump"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "29. What is the name of the Vice President of the United States now?", [ "JD Vance"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "30. If the President can no longer serve, who becomes President?", [ "the Vice President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "31. If both the President and the Vice President can no longer serve, who becomes President?", ["the Speaker of the House"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "32. Who is the Commander in Chief of the military?", ["the President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "33. Who signs bills to become laws?", ["the President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "34. Who vetoes bills?", [ "the President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "35. What does the President's Cabinet do?", ["advises the President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "36. What are two Cabinet-level positions?", [ "Secretary of Agriculture", "Secretary of Commerce", "Secretary of Defense", "Secretary of Education", "Secretary of Energy", "Secretary of Health and Human Services", "Secretary of Homeland Security", "Secretary of Housing and Urban Development", "Secretary of the Interior", "Secretary of Labor", "Secretary of State", "Secretary of Transportation", "Secretary of the Treasury", "Secretary of Veterans Affairs", "Attorney General", "Vice President"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "37. What does the judicial branch do?", ["reviews laws", "explains laws", "resolves disputes (disagreements)", "decides if a law goes against the Constitution"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "38. What is the highest court in the United States?",[ "the Supreme Court"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "39. How many justices are on the Supreme Court?",[ "9"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "40. Who is the Chief Justice of the United States now?",[ "John Roberts"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "41. Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",[ "to print money", "to declare war", "to create an army", "to make treaties"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "42. Under our Constitution, some powers belong to the states. What is one power of the states?", [ "provide schooling and education", "provide protection (police)", "provide safety (fire departments)", "give a driver's license", "approve zoning and land use"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "43. Who is the Governor of your state now?", ["Bob Ferguson"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "44. What is the capital of your state?", [ "Olympia"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "45. What are the two major political parties in the United States?", [ "Democratic and Republican"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "46. What is the political party of the President now?", ["Republican"]],

  [ "AMERICAN GOVERNMENT", "B: System of Government", "47. What is the name of the Speaker of the House of Representatives now?", ["James Michael 'Mike' Johnson"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "48. There are four amendments to the Constitution about who can vote. Describe one of them.", [ "Citizens eighteen (18) and older (can vote).", "You don't have to pay (a poll tax) to vote.", "Any citizen can vote. (Women and men can vote.)", "A male citizen of any race (can vote)."]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "49. What is one responsibility that is only for United States citizens?", [ "serve on a jury", "vote in a federal election"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "50. Name one right only for United States citizens.", [ "vote in a federal election", "run for federal office"]],
  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "51. What are two rights of everyone living in the United States?", ["freedom of expression", "freedom of speech", "freedom of assembly", "freedom to petition the government", "freedom of religion", "the right to bear arms"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "52. What do we show loyalty to when we say the Pledge of Allegiance?", [ "the United States", "the flag"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "53. What is one promise you make when you become a United States citizen?", [ "give up loyalty to other countries", "defend the Constitution and laws of the United States", "obey the laws of the United States", "serve in the U.S. military (if needed)", "serve (do important work for) the nation (if needed)", "be loyal to the United States"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "54. How old do citizens have to be to vote for President?", ["eighteen (18) and older"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "55. What are two ways that Americans can participate in their democracy?", [ "vote", "join a political party", "help with a campaign", "join a civic group", "join a community group", "give an elected official your opinion on an issue", "call Senators and Representatives", "publicly support or oppose an issue or policy", "run for office", "write to a newspaper"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "56. When is the last day you can send in federal income tax forms?", [ "April 15"]],

  [ "AMERICAN GOVERNMENT", "C: Rights and Responsibilities", "57. When must all men register for the Selective Service?", ["at age eighteen (18)", "between eighteen (18) and twenty-six (26)"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "58. What is one reason colonists came to America?", [ "freedom", "political liberty", "religious freedom", "economic opportunity", "practice their religion", "escape persecution"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "59. Who lived in America before the Europeans arrived?", [ "American Indians", "Native Americans"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "60. What group of people was taken to America and sold as slaves?", [ "Africans", "people from Africa"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "61. Why did the colonists fight the British?", [ "because of high taxes (taxation without representation)", "because the British army stayed in their houses (boarding, quartering)", "because they didn't have self-government"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "62. Who wrote the Declaration of Independence?", [ "(Thomas) Jefferson"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "63. When was the Declaration of Independence adopted?", [ "July 4, 1776"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "64. There were 13 original states. Name three.", [ "New Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "65. What happened at the Constitutional Convention?", ["The Constitution was written.", "The Founding Fathers wrote the Constitution."]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "66. When was the Constitution written?",[ "1787"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "67. The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.", ["(James) Madison", "(Alexander) Hamilton", "(John) Jay", "Publius"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "68. What is one thing Benjamin Franklin is famous for?", ["U.S. diplomat", "oldest member of the Constitutional Convention", "first Postmaster General of the United States", "writer of 'Poor Richard's Almanac'", "started the first free libraries"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "69. Who is the 'Father of Our Country'?", ["(George) Washington"]],

  [ "AMERICAN HISTORY", "A: Colonial Period and Independenc", "70. Who was the first President?", ["(George) Washington"]],

  [ "AMERICAN HISTORY", "B: 1800", "71. What territory did the United States buy from France in 1803?", ["the Louisiana Territory", "Louisiana"]],

  [ "AMERICAN HISTORY", "B: 1800", "72. Name one war fought by the United States in the 1800s.", ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"]],

  [ "AMERICAN HISTORY", "B: 1800", "73. Name the U.S. war between the North and the South.", ["the Civil War", "the War between the States"]],

  [ "AMERICAN HISTORY", "B: 1800", "74. Name one problem that led to the Civil War.", ["slavery", "economic reasons", "states' rights"]],

  [ "AMERICAN HISTORY", "B: 1800", "75. What was one important thing that Abraham Lincoln did?",["freed the slaves (Emancipation Proclamation)", "saved (or preserved) the Union", "led the United States during the Civil War"]],

  [ "AMERICAN HISTORY", "B: 1800", "76. What did the Emancipation Proclamation do?", ["freed the slaves", "freed slaves in the Confederacy", "freed slaves in the Confederate states", "freed slaves in most Southern states"]],

  [ "AMERICAN HISTORY", "B: 1800", "77. What did Susan B. Anthony do?", ["fought for women's rights", "fought for civil rights"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "78. Name one war fought by the United States in the 1900s.", ["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "79. Who was President during World War I?", ["(Woodrow) Wilson"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "80. Who was President during the Great Depression and World War II?", ["(Franklin) Roosevelt"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "81. Who did the United States fight in World War II?", ["Japan, Germany, and Italy"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "82. Before he was President, Eisenhower was a general. What war was he in?", ["World War II"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "83. During the Cold War, what was the main concern of the United States?", ["Communism"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "84. What movement tried to end racial discrimination?", ["civil rights (movement)"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "85. What did Martin Luther King, Jr. do?", ["fought for civil rights", "worked for equality for all Americans"]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "86. What major event happened on September 11, 2001, in the United States?", ["Terrorists attacked the United States."]],

  [ "AMERICAN HISTORY", "C: Recent American History and Other Important Historical Information", "87. Name one American Indian tribe in the United States. [USCIS Officers will be supplied with a list of federally recognized American Indian tribes.]", ["Cherokee", "Navajo", "Sioux", "Chippewa", "Choctaw", "Pueblo", "Apache", "Iroquois", "Creek", "Blackfeet", "Seminole", "Cheyenne", "Arawak", "Shawnee", "Mohegan", "Huron", "Oneida", "Lakota", "Crow", "Teton", "Hopi", "Inuit"]],

  ["INTEGRATED CIVIC", "A: Geography", "88. Name one of the two longest rivers in the United States.", ["Missouri (River)", "Mississippi (River)"]],

  ["INTEGRATED CIVIC", "A: Geography", "89. What ocean is on the West Coast of the United States?", ["Pacific (Ocean)"]],

  ["INTEGRATED CIVIC", "A: Geography", "90. What ocean is on the East Coast of the United States?", ["Atlantic (Ocean)"]],

  ["INTEGRATED CIVIC", "A: Geography", "91. Name one U.S. territory.", ["Puerto Rico", "U.S. Virgin Islands", "American Samoa", "Northern Mariana Islands", "Guam"]],

  ["INTEGRATED CIVIC", "A: Geography", "92. Name one state that borders Canada.", ["Maine", "New Hampshire", "Vermont", "New York", "Pennsylvania", "Ohio", "Michigan", "Minnesota", "North Dakota", "Montana", "Idaho", "Washington", "Alaska"]],

  ["INTEGRATED CIVIC", "A: Geography", "93. Name one state that borders Mexico.", ["California", "Arizona", "New Mexico", "Texas"]],

  ["INTEGRATED CIVIC", "A: Geography", "94. What is the capital of the United States?", ["Washington, D.C."]],

  ["INTEGRATED CIVIC", "A: Geography", "95. Where is the Statue of Liberty?", ["New York (Harbor)", "Liberty Island", "[Also acceptable are New Jersey, near New York City, and on the Hudson (River).]"]],

  ["INTEGRATED CIVIC", "B: Symbols", "96. Why does the flag have 13 stripes?", ["because there were 13 original colonies", "because the stripes represent the original colonies"]],

  ["INTEGRATED CIVIC", "B: Symbols","97. Why does the flag have 50 stars?", ["because there is one star for each state", "because each star represents a state", "because there are 50 states"]],

  ["INTEGRATED CIVIC", "B: Symbols", "98. What is the name of the national anthem?", ["The Star-Spangled Banner"]],
  ["INTEGRATED CIVIC", "C: Holiday", "99. When do we celebrate Independence Day?", ["July 4"]],
  ["INTEGRATED CIVIC", "C: Holiday", "100. Name two national U.S. holidays.", ["New Year's Day", "Martin Luther King, Jr. Day", "Presidents' Day", "Memorial Day", "Independence Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving", "Christmas"]]]
