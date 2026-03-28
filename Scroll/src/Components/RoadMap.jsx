import { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
const DATA = {
  C: [
    {
      title: "Why Learn C?",
      color: "#3b82f6",
      topics: [
        {
          t: "What is C and Why Does It Matter?",
          d: "C is one of the oldest and most powerful programming languages, created in 1972. It is the foundation of operating systems like Windows, Linux, and macOS. Almost every modern language — Python, Java, JavaScript — was influenced by C. Learning C gives you a deep understanding of how computers actually work.",
        },
        {
          t: "What Can You Build with C?",
          d: "C is used to build operating systems, embedded systems (like your microwave or car), game engines, compilers, databases, and hardware drivers. If you ever want to work in systems programming, robotics, IoT, or competitive programming — C is the starting point.",
        },
        {
          t: "How Computers Store Data — Memory Basics",
          d: "Before writing any C code, understand that computers store everything in memory (RAM) as 0s and 1s. Each variable you create in C occupies a specific number of bytes in memory. C gives you direct control over this memory — which is what makes it so powerful and so important to learn carefully.",
        },
        {
          t: "Setting Up Your Environment",
          d: "To write C programs you need a compiler — GCC is the most popular and free. On Windows, install MinGW or use VS Code with the C/C++ extension. On Linux/Mac, GCC is usually pre-installed. You can also use online compilers like repl.it or OnlineGDB to start instantly without any setup.",
        },
        {
          t: "Your First C Program — Hello World",
          d: 'Every C journey starts with Hello World. You write #include <stdio.h>, then int main() { printf("Hello, World!"); return 0; }. This tiny program teaches you the structure every C program follows — headers, the main function, a statement, and a return value.',
        },
      ],
    },

    {
      title: "Variables & Data Types",
      color: "#f59e0b",
      topics: [
        {
          t: "What are Variables?",
          d: "A variable is a named container that stores data in memory. In C you must declare the type of data before using it — like int age = 20; or float price = 9.99;. The type tells the compiler how much memory to reserve and how to interpret the stored bits.",
        },
        {
          t: "Basic Data Types — int, float, char, double",
          d: "int stores whole numbers like 5 or -100. float stores decimal numbers like 3.14. double stores larger decimals with more precision. char stores a single character like 'A'. Choosing the right type saves memory and prevents errors.",
        },
        {
          t: "Constants and Literals",
          d: "A constant is a value that never changes. You define it with #define PI 3.14159 or const float PI = 3.14159;. Using constants instead of raw numbers makes your code easier to read and update — change it in one place and it updates everywhere.",
        },
        {
          t: "Type Casting — Converting Between Types",
          d: "Type casting converts one data type to another. For example, dividing two integers gives an integer result — 7/2 = 3, not 3.5. To get 3.5 you cast: (float)7/2. This is a very common source of bugs for beginners — always think about your types.",
        },
        {
          t: "Input and Output — printf and scanf",
          d: "printf displays output on screen. scanf reads input from the user. Format specifiers like %d for int, %f for float, and %c for char tell C how to display or read the value. These two functions are used in almost every beginner C program.",
        },
      ],
    },

    {
      title: "Operators & Expressions",
      color: "#10b981",
      topics: [
        {
          t: "Arithmetic Operators",
          d: "C supports +, -, *, /, and % (modulus). The modulus operator gives the remainder — 10 % 3 = 1. Be careful with integer division: 7/2 = 3, not 3.5. These operators are the building blocks of all calculations in C.",
        },
        {
          t: "Relational & Logical Operators",
          d: "Relational operators compare values: == (equal), != (not equal), >, <, >=, <=. They return 1 (true) or 0 (false). Logical operators combine conditions: && (AND), || (OR), ! (NOT). These are essential for writing conditions and making decisions in your code.",
        },
        {
          t: "Assignment & Compound Operators",
          d: "= assigns a value. Compound operators combine assignment with an operation — x += 5 means x = x + 5. Similarly -=, *=, /=, %= all exist. These make your code shorter and are used constantly in loops and calculations.",
        },
        {
          t: "Increment & Decrement Operators",
          d: "++ increases a value by 1 and -- decreases by 1. Pre-increment (++x) changes the value before using it. Post-increment (x++) uses the value first, then changes it. This distinction matters in complex expressions and loops.",
        },
        {
          t: "Operator Precedence",
          d: "When multiple operators appear in one expression, C follows precedence rules — like BODMAS in math. Multiplication happens before addition. When in doubt, use parentheses to make your intent clear. Misunderstanding precedence is a very common source of bugs.",
        },
      ],
    },

    {
      title: "Control Flow",
      color: "#ef4444",
      topics: [
        {
          t: "if, else if, and else",
          d: "Conditional statements let your program make decisions. if checks a condition. If it is true, that block runs. else handles the case when it is false. else if lets you check multiple conditions in order. This is the most fundamental control structure in all of programming.",
        },
        {
          t: "Switch Statement",
          d: "Switch is a cleaner alternative to many else-if chains when checking one variable against multiple fixed values. Each case handles one value and break stops execution from falling through to the next case. Switch is commonly used for menus and command handling.",
        },
        {
          t: "for Loop",
          d: "The for loop repeats code a known number of times. It has three parts: initialize, condition, and update — all in one line: for(int i = 0; i < 5; i++). It is the most commonly used loop in C and perfect for iterating over arrays.",
        },
        {
          t: "while and do-while Loops",
          d: "The while loop keeps running as long as a condition is true — useful when you do not know how many times to repeat. The do-while loop always runs at least once before checking the condition. Both are useful for user-input validation and event-driven programs.",
        },
        {
          t: "break, continue, and goto",
          d: "break exits a loop or switch immediately. continue skips the rest of the current iteration and moves to the next one. goto jumps to a labeled line — it is available but should be avoided as it makes code hard to follow. break and continue are used regularly; goto almost never.",
        },
      ],
    },

    {
      title: "Functions",
      color: "#8b5cf6",
      topics: [
        {
          t: "What is a Function and Why Use One?",
          d: "A function is a reusable block of code that does one specific job. Instead of writing the same code 10 times, you write it once as a function and call it 10 times. Functions make programs shorter, easier to read, easier to debug, and easier to update.",
        },
        {
          t: "Declaring, Defining & Calling Functions",
          d: "A function declaration tells the compiler the function exists. The definition contains the actual code. Calling the function runs it. A function has a return type, a name, and optional parameters — int add(int a, int b) { return a + b; }.",
        },
        {
          t: "Parameters — Pass by Value",
          d: "When you pass a variable to a function in C, it gets a copy — this is called pass by value. Changes inside the function do NOT affect the original variable. To actually change the original, you must pass a pointer — which you will learn later.",
        },
        {
          t: "Scope and Lifetime of Variables",
          d: "A local variable only exists inside the function where it is declared. A global variable is declared outside all functions and can be used anywhere. Understanding scope prevents bugs where you accidentally use the wrong variable or try to access one that no longer exists.",
        },
        {
          t: "Recursion — Functions That Call Themselves",
          d: "Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a base case to stop. Classic examples: calculating factorial (n! = n × (n-1)!) and Fibonacci numbers. Recursion is elegant but uses more memory than loops.",
        },
      ],
    },

    {
      title: "Arrays & Strings",
      color: "#06b6d4",
      topics: [
        {
          t: "What is an Array?",
          d: "An array stores multiple values of the same type in a single variable — like a row of numbered boxes. int scores[5] = {90, 85, 78, 92, 88}; stores 5 integers. You access elements by index starting at 0 — scores[0] is 90. Arrays are used constantly for storing lists of data.",
        },
        {
          t: "Iterating Over Arrays with Loops",
          d: "The for loop and arrays are a natural pair. Use a loop variable as the array index to process every element — calculate total marks, find the maximum, or print all values. This combination is one of the most common patterns in all of C programming.",
        },
        {
          t: "Multi-Dimensional Arrays",
          d: "A 2D array is like a table with rows and columns — int matrix[3][3]. It is used for grids, matrices, game boards, and image pixels. You access elements with two indices — matrix[row][col]. Nested loops process all elements of a 2D array.",
        },
        {
          t: "Strings in C — Character Arrays",
          d: "C has no built-in string type. A string is just an array of characters ending with a special null character '\\0' — char name[20] = \"Alice\";. This null terminator tells functions where the string ends. Always make your char array large enough to include it.",
        },
        {
          t: "String Functions — strlen, strcpy, strcmp, strcat",
          d: "The string.h library provides ready-made functions for common string tasks. strlen gets the length. strcpy copies one string to another. strcmp compares two strings. strcat joins two strings together. These functions are used in almost every program that works with text.",
        },
      ],
    },

    {
      title: "Pointers",
      color: "#f97316",
      topics: [
        {
          t: "What is a Pointer?",
          d: "A pointer is a variable that stores the memory address of another variable. int *p = &x; means p holds the address where x lives in memory. The & operator gets the address. The * operator accesses the value at that address (called dereferencing). Pointers are the most powerful and most feared feature of C.",
        },
        {
          t: "Why Pointers Matter",
          d: "Pointers allow you to directly manipulate memory, pass large data to functions efficiently, build dynamic data structures like linked lists, and interact with hardware. Every advanced C program uses pointers. Mastering them is what separates beginners from confident C programmers.",
        },
        {
          t: "Pointer Arithmetic",
          d: "You can add and subtract integers from pointers. p++ moves to the next memory location for that data type. This is how C iterates over arrays internally — array[i] is exactly equivalent to *(array + i). Understanding this reveals how arrays and pointers are deeply connected in C.",
        },
        {
          t: "Pointers and Functions — Pass by Reference",
          d: "Passing a pointer to a function lets the function modify the original variable — called pass by reference. void swap(int *a, int *b) can actually swap two values because it works on the original addresses, not copies. This is the correct way to return multiple values from a function.",
        },
        {
          t: "Dynamic Memory — malloc, calloc, realloc, free",
          d: "Dynamic memory allocation lets you request memory at runtime instead of at compile time. malloc(size) allocates raw bytes. calloc initializes memory to zero. realloc resizes existing memory. free releases memory back to the system. Always free what you allocate — forgetting this causes memory leaks.",
        },
      ],
    },

    {
      title: "Structures & Unions",
      color: "#ec4899",
      topics: [
        {
          t: "What is a Structure?",
          d: "A structure groups related variables of different types under one name. struct Student { char name[50]; int age; float gpa; }; creates a blueprint. You then create variables of that type: struct Student s1;. Structures are C's way of creating custom data types — the foundation of object-oriented thinking.",
        },
        {
          t: "Accessing Structure Members",
          d: "Use the dot operator to access a structure's members — s1.age = 20. If you have a pointer to a structure, use the arrow operator — ptr->age = 20. Both do the same thing but the arrow operator is used constantly with dynamic data structures like linked lists.",
        },
        {
          t: "Array of Structures",
          d: "Just like an array of integers, you can have an array of structures — struct Student class[30]. This lets you store and process an entire class of students, a list of products, or a collection of records. This is the beginner version of what databases do.",
        },
        {
          t: "Nested Structures",
          d: "A structure can contain another structure as a member — like a Student that has an Address struct inside it. This models real-world relationships naturally. Nested structures are common in real C programs when data has a hierarchical shape.",
        },
        {
          t: "Unions — Shared Memory",
          d: "A union looks like a structure but all its members share the same memory location. Only one member holds a valid value at any time. Unions save memory when you have data that is one of several types but never multiple at once — commonly used in embedded systems and network protocols.",
        },
      ],
    },

    {
      title: "File Handling",
      color: "#84cc16",
      topics: [
        {
          t: "What is File Handling?",
          d: "File handling lets your program read data from files and write data to files permanently. Without files, all data disappears when the program ends. C uses a FILE pointer and the stdio.h library to work with files — opening, reading, writing, and closing them.",
        },
        {
          t: "Opening and Closing Files",
          d: "fopen() opens a file and returns a FILE pointer. You specify the file name and mode — r for read, w for write, a for append. Always check if fopen returned NULL (file not found). Always call fclose() when done — failing to close a file can cause data loss.",
        },
        {
          t: "Reading and Writing Text Files",
          d: "fprintf writes formatted text to a file just like printf does to the screen. fscanf reads formatted data from a file. fgets reads a whole line. fputs writes a line. These four functions handle the majority of text file operations in beginner C programs.",
        },
        {
          t: "Binary File I/O",
          d: "Binary files store data in raw byte format — not human-readable text. fread and fwrite work with binary files and are much faster for large datasets. They are used for storing images, audio, game save files, and any data where size and speed matter.",
        },
        {
          t: "Error Handling in File Operations",
          d: "Always check return values when working with files. feof() checks if you have reached the end of a file. ferror() checks if an error occurred. Proper error handling prevents crashes and data corruption when files are missing, locked, or full.",
        },
      ],
    },

    {
      title: "Advanced C Topics",
      color: "#e0a419",
      topics: [
        {
          t: "Preprocessor Directives — #define, #include, #ifdef",
          d: "#include brings in library headers. #define creates constants and macros. #ifdef / #endif allows conditional compilation — including different code for different platforms. Preprocessor directives run before compilation and are a powerful but easily misused feature of C.",
        },
        {
          t: "Bitwise Operators",
          d: "Bitwise operators work directly on the binary bits of a number. & (AND), | (OR), ^ (XOR), ~ (NOT), << (left shift), >> (right shift). Used for flags, permissions, hardware registers, and performance-critical code. Understanding bits is essential for embedded and systems programming.",
        },
        {
          t: "Function Pointers",
          d: "In C, functions themselves have addresses in memory. A function pointer stores that address — allowing you to call different functions dynamically. This is how callbacks, event systems, and plugin architectures work. Function pointers are the C version of what other languages call first-class functions.",
        },
        {
          t: "Linked Lists — Dynamic Data Structures",
          d: "A linked list is a chain of nodes where each node holds data and a pointer to the next node. Unlike arrays, it can grow and shrink dynamically. Each node is created with malloc. Linked lists are the foundation for stacks, queues, and trees — and mastering them cements your pointer skills.",
        },
        {
          t: "Debugging with GDB and Valgrind",
          d: "GDB (GNU Debugger) lets you pause your program, inspect variables, and step through code line by line to find bugs. Valgrind detects memory leaks and invalid memory access — the two most dangerous categories of C bugs. Learning these tools transforms you from a frustrated guesser into a confident problem solver.",
        },
      ],
    },

    {
      title: "Build C Projects",
      color: "#f7c651",
      topics: [
        {
          t: "Calculator — Beginner",
          d: "Build a command-line calculator that performs add, subtract, multiply, and divide using a switch statement. Add input validation and a loop so users can calculate multiple times. This project practices functions, control flow, and user input — the three core beginner skills.",
        },
        {
          t: "Student Grade Manager — Beginner",
          d: "Store student names and marks in an array of structures. Calculate averages, find the highest scorer, and display a grade report. This project practices structs, arrays, loops, and file handling — writing results to a file so data persists after the program ends.",
        },
        {
          t: "Number Guessing Game — Beginner",
          d: "The program picks a random number and the user guesses until they get it right. Count the attempts and give hints (too high / too low). Uses rand(), loops, conditionals, and functions. A fun project that makes control flow click for beginners.",
        },
        {
          t: "File-Based Contact Book — Intermediate",
          d: "Add, search, display, and delete contacts stored in a binary file. Each contact is a struct with name, phone, and email. Uses file handling, structures, and string functions together. A realistic project that feels like a real application.",
        },
        {
          t: "Linked List Implementation — Intermediate",
          d: "Build a fully functional singly linked list with insert, delete, search, and display operations from scratch. Every node is dynamically allocated with malloc and freed when deleted. This is the ultimate test of your pointer and memory management skills — and a classic interview question.",
        },
      ],
    },

    {
      title: "Capstone & Next Steps",
      color: "#10b981",
      topics: [
        {
          t: "Mini Shell — Command Line Interpreter",
          d: "Build a simple shell that reads commands from the user, parses them, and executes them using system calls like fork() and exec(). This is a systems programming capstone that teaches you how real terminal programs work under the hood — and looks incredible on a portfolio.",
        },
        {
          t: "Memory Allocator — Build Your Own malloc",
          d: "Implement a simplified version of malloc and free from scratch using sbrk() or a fixed memory pool. This advanced project teaches how heap memory management works internally — deepening your understanding of pointers, memory, and operating system interaction.",
        },
        {
          t: "Practice on HackerRank & LeetCode",
          d: "Solve problems tagged as C on HackerRank and the C track on Exercism.io. Start with easy array and string problems. Then move to pointer and recursion challenges. Consistent problem solving builds the pattern recognition needed for technical interviews.",
        },
        {
          t: "Read 'The C Programming Language' by K&R",
          d: "The C Programming Language by Brian Kernighan and Dennis Ritchie (the creator of C) is the definitive reference. It is short, dense, and brilliant. After completing this roadmap, reading K&R will fill every remaining gap and make you a truly confident C programmer.",
        },
        {
          t: "Where to Go After C?",
          d: "After C, the natural paths are: C++ for object-oriented systems and game development, embedded C for microcontrollers and IoT (Arduino, STM32), or Linux kernel and systems programming. Your C foundation makes all of these dramatically easier to learn than they would be otherwise.",
        },
      ],
    },
  ],

  Python: [
    {
      title: "Why Learn Python?",
      color: "#3b82f6",
      topics: [
        {
          t: "What is Python and Why is it #1?",
          d: "Python is the world's most popular programming language — used by Google, Netflix, NASA, and Instagram. It reads almost like plain English, making it the friendliest language for beginners. One language can take you into web development, data science, AI, automation, and more.",
        },
        {
          t: "What Can You Build with Python?",
          d: "Python is used to build websites (Instagram, Pinterest), automate boring tasks (rename 1000 files in one script), analyze data, build AI and ML models, create games, write automation bots, develop APIs, and do cybersecurity testing. It is one of the most versatile languages ever created.",
        },
        {
          t: "Decide Your End Goal Before You Start",
          d: "Python can go in many directions. Before starting, ask yourself: do you want to build websites? Work in data science? Automate tasks? Build AI? Having a goal keeps you motivated and helps you choose which libraries and frameworks to focus on after the basics.",
        },
        {
          t: "Setting Up Python — Install & Run Your First Program",
          d: "Visit python.org, download the latest version, and install it. Use VS Code with the Python extension as your editor — it is free and beginner-friendly. Open a terminal and type python --version to confirm the install worked. You are now ready to write your first program.",
        },
        {
          t: "Hello World — Your First Python Program",
          d: "Python's Hello World is just one line: print('Hello, World!'). No semicolons, no curly braces, no boilerplate. This simplicity is Python's superpower. Run it from VS Code or the Python shell — seeing that output on screen is the start of your journey.",
        },
      ],
    },

    {
      title: "Variables & Data Types",
      color: "#f59e0b",
      topics: [
        {
          t: "Variables — Storing Information",
          d: "A variable is a named container for data. In Python you just write name = 'Alice' or age = 20 — no need to declare a type first. Python figures out the type automatically. Variables can store numbers, text, lists, and much more.",
        },
        {
          t: "Core Data Types — int, float, str, bool",
          d: "int stores whole numbers like 42. float stores decimals like 3.14. str stores text like 'Hello'. bool stores True or False. These four types are the foundation of every Python program. Knowing when to use each one prevents many beginner mistakes.",
        },
        {
          t: "Type Checking and Type Conversion",
          d: "Use type() to check what type a variable is. Use int(), float(), and str() to convert between types — called type casting. For example, int('42') converts the string '42' into the number 42. This is essential when reading user input, which always comes in as a string.",
        },
        {
          t: "User Input — Getting Data from the Keyboard",
          d: "input() pauses the program and waits for the user to type something. It always returns a string — so convert it if you need a number: age = int(input('Enter your age: ')). Taking input makes your programs interactive and is used in almost every beginner project.",
        },
        {
          t: "String Basics — Working with Text",
          d: "Strings are sequences of characters. You can join them with + (concatenation), repeat them with *, check their length with len(), and format them with f-strings: f'Hello {name}!'. F-strings are the modern, clean way to insert variables into text — use them everywhere.",
        },
      ],
    },

    {
      title: "Operators & Expressions",
      color: "#10b981",
      topics: [
        {
          t: "Arithmetic Operators",
          d: "Python supports +, -, *, /, // (floor division), % (modulus), and ** (exponent). 10 // 3 = 3 (discards the decimal). 10 % 3 = 1 (the remainder). 2 ** 8 = 256. These cover all the math you need for beginner programs and most real-world calculations.",
        },
        {
          t: "Comparison & Logical Operators",
          d: "Comparison operators return True or False: ==, !=, >, <, >=, <=. Logical operators combine conditions: and (both must be true), or (at least one must be true), not (flips the result). These are used constantly in if statements and while loops.",
        },
        {
          t: "Assignment Operators",
          d: "= assigns a value. Compound operators combine assignment with math: x += 5 means x = x + 5. Similarly -=, *=, /=, //=, **= all work. These make loop counters and running totals cleaner and shorter.",
        },
        {
          t: "Membership & Identity Operators",
          d: "in checks if a value exists in a sequence — 'a' in 'cat' is True. not in is the opposite. is checks if two variables point to the exact same object in memory (not just equal values). These are frequently used when searching lists and checking conditions.",
        },
        {
          t: "Operator Precedence",
          d: "Python follows BODMAS/PEMDAS rules. Exponents (**) come first, then multiplication and division, then addition and subtraction. When in doubt, add parentheses to make your intent explicit. Misunderstanding precedence silently produces wrong results — one of the trickiest beginner bugs.",
        },
      ],
    },

    {
      title: "Control Flow",
      color: "#ef4444",
      topics: [
        {
          t: "if, elif, and else — Making Decisions",
          d: "Conditional statements let your program make decisions. if checks a condition. elif checks another condition if the first was false. else handles everything else. Python uses indentation (not curly braces) to define blocks — 4 spaces is the standard. Getting indentation right is essential.",
        },
        {
          t: "for Loop — Iterating Over Sequences",
          d: "The for loop iterates over any sequence — a list, string, range, or dictionary. for item in my_list: processes each item one by one. range(5) generates numbers 0 to 4. The for loop is Python's most used loop and works beautifully with all built-in data structures.",
        },
        {
          t: "while Loop — Repeat Until a Condition is False",
          d: "The while loop keeps running as long as a condition is True. It is perfect when you do not know how many times to repeat — like a menu that keeps showing until the user chooses to exit. Always ensure the condition eventually becomes False to avoid infinite loops.",
        },
        {
          t: "break, continue, and pass",
          d: "break exits a loop immediately. continue skips the rest of the current iteration and jumps to the next one. pass is a placeholder — it does nothing and is used when a block is required syntactically but you have nothing to write yet. All three appear regularly in real code.",
        },
        {
          t: "Nested Loops and Loop Patterns",
          d: "A loop inside another loop is a nested loop — commonly used for grids, tables, and 2D data. The inner loop runs completely for every single iteration of the outer loop. Be careful with nested loops on large data — they can be slow. Understanding this prepares you for algorithms.",
        },
      ],
    },

    {
      title: "Functions",
      color: "#8b5cf6",
      topics: [
        {
          t: "What is a Function and Why Use One?",
          d: "A function is a named, reusable block of code that does one specific job. def greet(name): return f'Hello {name}'. Instead of repeating code, you define it once and call it anywhere. Functions make programs shorter, easier to debug, and easier to maintain.",
        },
        {
          t: "Parameters, Arguments & Return Values",
          d: "Parameters are the variables listed in the function definition. Arguments are the actual values you pass when calling it. return sends a result back to the caller. A function without return implicitly returns None. Understanding this flow is the most important skill in functional programming.",
        },
        {
          t: "Default Parameters & Keyword Arguments",
          d: "Default parameters let you define a fallback value: def greet(name='World'). Keyword arguments let you pass arguments by name in any order: greet(name='Alice'). These make functions more flexible and readable — especially important in Python's many libraries.",
        },
        {
          t: "Variable Scope — Local vs Global",
          d: "A variable created inside a function is local — it only exists there. A variable created outside is global. If you need to modify a global variable inside a function, use the global keyword. Understanding scope prevents confusing bugs where variables seem to disappear or have unexpected values.",
        },
        {
          t: "Lambda Functions & Built-ins",
          d: "A lambda is a tiny anonymous function: square = lambda x: x**2. They are used with built-in functions like map(), filter(), and sorted(). Python also has powerful built-ins like len(), sum(), min(), max(), zip(), and enumerate() — learning these 10 built-ins alone saves hundreds of lines of code.",
        },
      ],
    },

    {
      title: "Data Structures",
      color: "#06b6d4",
      topics: [
        {
          t: "Lists — Ordered & Changeable Collections",
          d: "A list stores multiple items in order: fruits = ['apple', 'banana', 'cherry']. Lists are mutable — you can add, remove, and change items. Key methods: append(), remove(), pop(), sort(), reverse(), len(). List indexing starts at 0. Negative indices count from the end (-1 is the last item).",
        },
        {
          t: "List Slicing & List Comprehensions",
          d: "Slicing extracts a portion of a list: fruits[1:3] gives items at index 1 and 2. List comprehensions create new lists in one line: squares = [x**2 for x in range(10)]. This is one of Python's most powerful and elegant features — it replaces many for loops with a single readable line.",
        },
        {
          t: "Tuples — Ordered & Unchangeable",
          d: "A tuple is like a list but immutable — once created, it cannot be changed: coords = (10, 20). Tuples are faster than lists and used for data that should not be modified — like coordinates, RGB colors, or function return values with multiple outputs. Unpack them easily: x, y = coords.",
        },
        {
          t: "Dictionaries — Key-Value Pairs",
          d: "A dictionary stores data as key-value pairs: person = {'name': 'Alice', 'age': 25}. Access values by key: person['name']. Add, update, and delete keys easily. Dictionaries are incredibly fast for lookups and are used in almost every real Python program for storing structured data.",
        },
        {
          t: "Sets — Unique Unordered Collections",
          d: "A set stores unique items with no duplicates: {1, 2, 3}. Adding an item that already exists does nothing. Sets support powerful mathematical operations: union (|), intersection (&), and difference (-). Use sets to remove duplicates from a list in one line: list(set(my_list)).",
        },
      ],
    },

    {
      title: "String Manipulation",
      color: "#f97316",
      topics: [
        {
          t: "String Methods — The Most Useful 10",
          d: "Python strings have dozens of built-in methods. The most useful: upper(), lower(), strip() (removes whitespace), split() (splits into a list), join() (joins a list into a string), replace(), find(), startswith(), endswith(), and count(). Mastering these eliminates most text-processing problems.",
        },
        {
          t: "String Formatting — f-strings",
          d: "F-strings are Python's best way to embed variables in text: f'Hello {name}, you are {age} years old'. They are faster, cleaner, and more readable than the old % formatting or .format() method. You can even put expressions inside: f'Result: {2 + 2}' prints 'Result: 4'.",
        },
        {
          t: "String Slicing and Indexing",
          d: "Strings work like lists of characters. s[0] is the first character. s[-1] is the last. s[2:5] gives characters at index 2, 3, 4. s[::-1] reverses the string. These slicing tricks solve many interview problems and are essential for text processing tasks.",
        },
        {
          t: "Regular Expressions — Pattern Matching",
          d: "The re module lets you search and manipulate text using patterns. re.search(pattern, text) finds a match. re.findall() returns all matches. re.sub() replaces matches. Regex is used in form validation, log file parsing, and web scraping. The syntax is tricky but extremely powerful.",
        },
        {
          t: "Working with Multiline Strings & Raw Strings",
          d: "Triple quotes create multiline strings: '''line one\\nline two'''. Raw strings (r'C:\\Users\\file') treat backslashes as literal characters — essential for file paths on Windows and regular expression patterns. Knowing these prevents confusing escape character bugs.",
        },
      ],
    },

    {
      title: "Object-Oriented Programming",
      color: "#ec4899",
      topics: [
        {
          t: "What is OOP and Why Does It Matter?",
          d: "Object-Oriented Programming organizes code into classes and objects. A class is a blueprint — like a cookie cutter. An object is a specific instance made from that blueprint — a specific cookie. OOP makes large programs manageable, reusable, and mirrors how we think about real-world things.",
        },
        {
          t: "Classes, Objects & the __init__ Method",
          d: "class Dog: defines a blueprint. def __init__(self, name): is the constructor — it runs automatically when you create an object. self refers to the specific instance being created. my_dog = Dog('Rex') creates an object. my_dog.name gives 'Rex'. This is the foundation of all OOP in Python.",
        },
        {
          t: "Instance Methods & Attributes",
          d: "Methods are functions defined inside a class. Instance attributes (self.name) belong to a specific object. Class attributes are shared by all objects. Adding methods gives your objects behavior — like bark() on a Dog class. This encapsulation keeps related data and behavior together.",
        },
        {
          t: "Inheritance — Reusing and Extending Classes",
          d: "Inheritance lets a child class inherit all attributes and methods from a parent class: class Puppy(Dog). The child can add new methods or override existing ones. super() calls the parent's method. This avoids code duplication and models real-world relationships like Animal → Dog → Puppy.",
        },
        {
          t: "Encapsulation, Polymorphism & Dunder Methods",
          d: "Encapsulation hides internal data using private attributes (prefix with _). Polymorphism lets different classes implement the same method differently. Dunder (double underscore) methods like __str__, __len__, and __add__ customize how your objects behave with Python's built-in operations — like printing or adding.",
        },
      ],
    },

    {
      title: "Modules, Files & Error Handling",
      color: "#84cc16",
      topics: [
        {
          t: "Modules and Packages — Organized Code",
          d: "A module is simply a .py file you can import into another file: import math. A package is a folder of modules. Python's standard library has modules for almost everything — math, random, datetime, os, sys. import math; math.sqrt(16) returns 4.0. Never reinvent what a module already does.",
        },
        {
          t: "File Handling — Read, Write & Append",
          d: "with open('file.txt', 'r') as f: is the safe way to open a file — it auto-closes even if an error occurs. 'r' reads, 'w' writes (overwrites), 'a' appends. f.read() gets all content. f.readlines() returns a list of lines. f.write('text') writes to the file. File handling is essential for any real application.",
        },
        {
          t: "Working with JSON Files",
          d: "JSON is the universal format for storing and exchanging data. Python's json module converts between Python dictionaries and JSON files effortlessly. json.load(f) reads a JSON file into a dictionary. json.dump(data, f) writes a dictionary to a JSON file. APIs return JSON — knowing this is mandatory.",
        },
        {
          t: "Exception Handling — try, except, finally",
          d: "try runs code that might fail. except catches the error and handles it gracefully instead of crashing. finally always runs — perfect for cleanup like closing files. You can catch specific errors: except ValueError, except FileNotFoundError. Good error handling is the difference between amateur and professional code.",
        },
        {
          t: "Raising Custom Exceptions",
          d: "You can raise your own errors with raise ValueError('Age cannot be negative'). You can even create custom exception classes by inheriting from Exception. Raising meaningful errors makes debugging faster and makes your code self-documenting — the code tells you exactly what went wrong and why.",
        },
      ],
    },

    {
      title: "Python Libraries",
      color: "#e0a419",
      topics: [
        {
          t: "pip — Installing External Libraries",
          d: "pip is Python's package manager. pip install requests installs the Requests library. pip install pandas installs Pandas. There are over 400,000 packages on PyPI (Python Package Index) — a library for almost anything you can imagine. Virtual environments (venv) keep project dependencies isolated and organized.",
        },
        {
          t: "NumPy — Fast Number Crunching",
          d: "NumPy provides arrays that are 10–100× faster than Python lists for numerical operations. Instead of looping over a million numbers, NumPy processes them all at once with a single operation. It is the foundation of all data science and ML libraries in Python — Pandas and TensorFlow are both built on top of it.",
        },
        {
          t: "Pandas — Working with Data Tables",
          d: "Pandas lets you load, explore, filter, sort, and transform data that comes in tables — like Excel sheets but in Python. A DataFrame is the core data structure — rows and columns just like a spreadsheet. Load a CSV with pd.read_csv(), filter rows, compute statistics. Essential for any data work.",
        },
        {
          t: "Requests — Talking to the Internet",
          d: "The Requests library makes HTTP requests simple: response = requests.get(url). You can fetch data from any website or API in two lines of code. response.json() parses the response. This is how you build weather apps, currency converters, news aggregators, and any app that pulls data from the web.",
        },
        {
          t: "Matplotlib — Visualizing Data with Charts",
          d: "Matplotlib creates line charts, bar charts, histograms, scatter plots, and pie charts. plt.plot(x, y) draws a line chart. plt.show() displays it. Seaborn is built on top of Matplotlib and makes beautiful statistical charts with very little code. Visualization turns raw data into insight.",
        },
      ],
    },

    {
      title: "Git, OOP Projects & Best Practices",
      color: "#f7c651",
      topics: [
        {
          t: "Git & GitHub — Version Control for Your Code",
          d: "Git saves every version of your code so you never lose work. git init starts tracking. git add . selects all files. git commit -m 'message' saves a snapshot. git push uploads to GitHub. GitHub is your public portfolio — every project you push becomes visible to employers and collaborators worldwide.",
        },
        {
          t: "Writing Clean Python Code — PEP 8",
          d: "PEP 8 is Python's official style guide. Use 4-space indentation, snake_case for variable names, and descriptive names. Keep functions short — one function, one job. Add docstrings to explain what functions do. Clean code is not just about working — it is about being readable by your future self and teammates.",
        },
        {
          t: "Virtual Environments — Manage Dependencies",
          d: "python -m venv venv creates an isolated environment for your project. source venv/bin/activate activates it (venv\\Scripts\\activate on Windows). Now pip installs only affect this project. requirements.txt lists all dependencies so others can recreate your setup exactly. This is standard practice in every professional Python project.",
        },
        {
          t: "Debugging Python — Tools and Techniques",
          d: "print() debugging works for simple cases but is slow. Python's built-in pdb debugger lets you pause execution and inspect variables step by step. VS Code has a visual debugger with breakpoints. Learning to debug efficiently is as important as learning to write code — bugs are unavoidable.",
        },
        {
          t: "Testing with unittest & pytest",
          d: "Writing tests verifies your code works and catches regressions when you change it. pytest is the most popular testing tool — write a function that starts with test_ and pytest runs it automatically. Testing feels like extra work at first but saves enormous time as projects grow. Every professional Python codebase has tests.",
        },
      ],
    },

    {
      title: "Build Python Projects",
      color: "#10b981",
      topics: [
        {
          t: "Number Guessing Game — Beginner",
          d: "The program picks a random number using random.randint() and the user guesses until correct. Give 'too high' / 'too low' hints and count attempts. This project practices variables, loops, conditionals, functions, and input — covering the entire beginner syllabus in one fun program.",
        },
        {
          t: "To-Do List CLI App — Beginner",
          d: "A command-line app to add, view, complete, and delete tasks. Store tasks in a JSON file so they persist between runs. This project practices lists, dictionaries, file handling, functions, and a simple menu loop. Clean, useful, and a great first portfolio project.",
        },
        {
          t: "Web Scraper — Intermediate",
          d: "Use Requests to fetch a webpage and BeautifulSoup to parse the HTML and extract data — product prices, news headlines, or weather. Save results to a CSV file with Pandas. This project teaches real-world data extraction and is one of the most marketable Python skills.",
        },
        {
          t: "REST API with Flask — Intermediate",
          d: "Build a simple API with Flask that handles GET and POST requests. Connect it to a SQLite database using SQLAlchemy. Return data as JSON. This is the foundation of backend web development with Python and teaches how frontend apps communicate with servers.",
        },
        {
          t: "Data Analysis Dashboard — Advanced",
          d: "Load a real dataset (like Kaggle's Titanic or movies dataset) with Pandas, clean it, analyze it, and create charts with Matplotlib and Seaborn. Present findings in a Jupyter Notebook or a Streamlit web app. This is a complete data science mini-project that looks impressive on any portfolio.",
        },
      ],
    },
  ],

  Java: [
    {
      title: "Why Learn Java?",
      color: "#f97316",
      topics: [
        {
          t: "What is Java and Why is it Everywhere?",
          d: "Java was created in 1995 and is still one of the top 3 most used programming languages in the world. It powers Android apps, banking systems, e-commerce platforms, and enterprise software at companies like Amazon, Google, and LinkedIn. Over 9 million developers call Java their primary language.",
        },
        {
          t: "Write Once, Run Anywhere — The JVM",
          d: "Java's biggest superpower is platform independence. You write the code once and it runs on any operating system — Windows, Mac, Linux, Android. This is possible because Java compiles to bytecode, not machine code, and the Java Virtual Machine (JVM) on each platform runs that bytecode.",
        },
        {
          t: "What Can You Build with Java?",
          d: "Java is used to build Android apps, backend REST APIs, banking and fintech software, large-scale enterprise applications, game servers, cloud microservices, and big data tools. Spring Boot (Java's most popular framework) powers the backend of thousands of production apps worldwide.",
        },
        {
          t: "Setting Up Java — JDK, IDE, and Hello World",
          d: 'Download the Java Development Kit (JDK) from oracle.com or adoptium.net. Install IntelliJ IDEA Community Edition — the best free Java IDE in the world. Create a new project, write public class Main { public static void main(String[] args) { System.out.println("Hello, World!"); } } and run it.',
        },
        {
          t: "How Java Code Runs — Compile to Bytecode",
          d: "When you run a Java program, two steps happen. First, the Java compiler (javac) converts your .java file into a .class file containing bytecode. Then the JVM reads that bytecode and executes it. Understanding this compile-run cycle helps you read error messages and debug problems faster.",
        },
      ],
    },

    {
      title: "Variables & Data Types",
      color: "#06b6d4",
      topics: [
        {
          t: "Primitive Data Types — Java's Building Blocks",
          d: "Java has 8 primitive types. The most used are: int (whole numbers like 42), double (decimals like 3.14), char (a single character like 'A'), and boolean (true or false). Java is statically typed — you must declare the type before using it: int age = 20; This strictness prevents many runtime bugs.",
        },
        {
          t: "Variables — Declaring, Initializing & Naming",
          d: "A variable is a named storage slot in memory. Declare it with a type and name: int score; Initialize it by assigning a value: score = 100; Or do both at once: int score = 100; Java variable names use camelCase (myVariableName). Constants use ALL_CAPS and the final keyword: final int MAX_SCORE = 100;",
        },
        {
          t: "String — Working with Text",
          d: 'String is not a primitive — it is a class. String name = "Alice"; Java Strings are immutable — once created they cannot be changed, only replaced. Useful methods: length(), toUpperCase(), toLowerCase(), contains(), substring(), equals() (always use equals() to compare strings, never ==).',
        },
        {
          t: "Type Casting — Converting Between Types",
          d: "Widening casting (int to double) happens automatically. Narrowing casting (double to int) must be done explicitly: int x = (int) 9.99; gives 9. Type casting is important when doing math with mixed types. Integer division is a classic bug: 7/2 = 3, not 3.5 — cast first to get 3.5.",
        },
        {
          t: "Input & Output — Scanner and System.out",
          d: "System.out.println() prints to the console. To read user input, use the Scanner class: Scanner sc = new Scanner(System.in); int age = sc.nextInt(); String name = sc.nextLine(); Scanner is the standard way to get keyboard input in beginner Java programs and console applications.",
        },
      ],
    },

    {
      title: "Operators & Expressions",
      color: "#84cc16",
      topics: [
        {
          t: "Arithmetic Operators",
          d: "Java supports +, -, *, /, and % (modulus). Integer division truncates decimals: 7/2 = 3. To get 3.5, make one operand a double: 7.0/2. The modulus operator gives the remainder: 10 % 3 = 1. It is commonly used to check if a number is even (n % 2 == 0) or to cycle through values.",
        },
        {
          t: "Comparison & Logical Operators",
          d: "Comparison operators return boolean: == (equal to), != (not equal), >, <, >=, <=. Logical operators combine booleans: && (AND — both true), || (OR — at least one true), ! (NOT — flips the result). These form the conditions in every if statement, loop, and method you write.",
        },
        {
          t: "Increment, Decrement & Compound Assignment",
          d: "++ increments by 1, -- decrements by 1. Pre (++x) changes the value before use; post (x++) uses the value first then changes it. Compound operators shorten math+assignment: x += 5 means x = x + 5. These appear constantly in loops and calculations.",
        },
        {
          t: "Ternary Operator — Compact if-else",
          d: 'The ternary operator is a one-line if-else: condition ? valueIfTrue : valueIfFalse. String result = (score >= 50) ? "Pass" : "Fail"; It is clean and readable for simple decisions. For complex logic, stick with a regular if-else to keep code maintainable.',
        },
        {
          t: "Operator Precedence",
          d: "When multiple operators appear in one expression, Java follows precedence rules — similar to BODMAS in math. Unary operators first, then *, /, %, then +, -, then comparisons, then logical operators. When in doubt, use parentheses to make your intent clear. Silent precedence bugs are among the hardest to spot.",
        },
      ],
    },

    {
      title: "Control Flow",
      color: "#ec4899",
      topics: [
        {
          t: "if, else if, else — Decision Making",
          d: "if evaluates a boolean condition and runs the block if true. else if adds additional conditions. else handles everything else. Java requires curly braces { } for multi-line blocks — always use them even for single lines to prevent bugs. Proper indentation makes nested conditions readable.",
        },
        {
          t: "switch Statement & switch Expressions",
          d: 'switch is cleaner than many else-if chains when checking one value against fixed options. Each case handles one value and break stops fall-through. Java 14+ introduced switch expressions — a modern, cleaner syntax: String day = switch(num) { case 1 -> "Mon"; case 2 -> "Tue"; default -> "Other"; };',
        },
        {
          t: "for Loop — Fixed Repetition",
          d: "The for loop repeats a block a specific number of times: for (int i = 0; i < 5; i++). The enhanced for-each loop iterates over arrays and collections cleanly: for (int num : numbers). For loops and arrays are Java's most powerful beginner combination for processing lists of data.",
        },
        {
          t: "while & do-while Loops",
          d: "The while loop runs as long as a condition is true — useful when you do not know how many iterations are needed. The do-while loop always executes at least once before checking the condition — perfect for menus that must show at least once. Always ensure the loop condition eventually becomes false.",
        },
        {
          t: "break, continue & Nested Loops",
          d: "break exits the current loop immediately. continue skips the rest of the current iteration. Nested loops (a loop inside a loop) are used for 2D arrays, multiplication tables, and pattern printing. The inner loop runs completely for every single outer loop iteration — essential to understand for algorithm problems.",
        },
      ],
    },

    {
      title: "Methods (Functions)",
      color: "#8b5cf6",
      topics: [
        {
          t: "What is a Method and Why Use One?",
          d: "A method is a named block of code that performs one specific task. Instead of writing the same code multiple times, define it once and call it anywhere. Methods make programs shorter, easier to read, and easier to test. Every program you write should be broken into small, focused methods.",
        },
        {
          t: "Declaring Methods — Return Type, Name & Parameters",
          d: "A method declaration has four parts: access modifier (public/private), return type (int, String, void), name, and parameters. public int add(int a, int b) { return a + b; } void means the method returns nothing. The method signature must exactly match when calling it.",
        },
        {
          t: "Method Overloading",
          d: "Method overloading means defining multiple methods with the same name but different parameters. int add(int a, int b) and double add(double a, double b) are two different methods. Java picks the right one based on what you pass. This makes APIs intuitive and clean to use.",
        },
        {
          t: "Pass by Value — How Java Passes Arguments",
          d: "Java always passes primitive types by value — a copy is made, so changes inside the method do not affect the original. Objects are passed by reference value — you pass a copy of the reference, so the method can modify the object's fields but cannot reassign the original reference. This distinction prevents many bugs.",
        },
        {
          t: "Recursion — Methods That Call Themselves",
          d: "A recursive method calls itself to solve a smaller version of the same problem. Every recursive method must have a base case to stop. Classic examples: factorial (n! = n × factorial(n-1)) and Fibonacci. Recursion is elegant for problems that naturally divide into smaller identical sub-problems.",
        },
      ],
    },

    {
      title: "Arrays & Strings",
      color: "#f59e0b",
      topics: [
        {
          t: "Arrays — Storing Multiple Values",
          d: "An array stores multiple values of the same type in one variable: int[] scores = {90, 85, 78}; Access elements by index starting at 0: scores[0] is 90. Arrays have a fixed size set at creation. .length gives the size. Arrays are the foundation of all data processing — used in every real Java program.",
        },
        {
          t: "Iterating Arrays — for and for-each",
          d: "Process every element with a for loop using index: for (int i = 0; i < scores.length; i++). Or use the cleaner for-each: for (int s : scores). Common patterns: find the sum, find the maximum, count matching elements, and reverse an array. These patterns appear in every coding interview.",
        },
        {
          t: "Multi-Dimensional Arrays",
          d: "A 2D array is like a table: int[][] matrix = new int[3][3]. Access elements with two indices: matrix[row][col]. Nested for loops process every cell. 2D arrays model game boards, spreadsheets, pixel grids, and mathematical matrices. They appear frequently in interview algorithm problems.",
        },
        {
          t: "String Class — Methods You Must Know",
          d: "Java's String class has powerful built-in methods. Must-know: length(), charAt(i), substring(start, end), indexOf(), contains(), replace(), toUpperCase(), toLowerCase(), trim(), split(), equals(), and equalsIgnoreCase(). These methods handle nearly every text-processing task you will encounter.",
        },
        {
          t: "StringBuilder — Efficient String Manipulation",
          d: "Strings in Java are immutable — every + concatenation creates a new object. For building strings in loops, use StringBuilder: sb.append('text'). StringBuilder modifies the same object in memory — making it 10x–100x faster than String + in a loop. Always use StringBuilder when building strings dynamically.",
        },
      ],
    },

    {
      title: "Object-Oriented Programming",
      color: "#ef4444",
      topics: [
        {
          t: "Classes and Objects — The Core of Java",
          d: "A class is a blueprint that defines data (fields) and behavior (methods). An object is a specific instance created from that blueprint. class Dog { String name; void bark() { } } creates the blueprint. Dog myDog = new Dog(); creates an actual dog object. Java is built entirely around this concept.",
        },
        {
          t: "Constructors — Creating Objects the Right Way",
          d: "A constructor is a special method that runs automatically when an object is created. It sets up the initial state: public Dog(String name) { this.name = name; } this refers to the current object and disambiguates between field names and parameter names. Constructors can be overloaded just like regular methods.",
        },
        {
          t: "Encapsulation — Private Fields & Getters/Setters",
          d: "Encapsulation hides an object's data by making fields private and providing public getter and setter methods. private int age; public int getAge() { return age; } This protects data from being changed to invalid values and is the standard pattern in every professional Java codebase — used in every framework and library.",
        },
        {
          t: "Inheritance — Reusing and Extending Classes",
          d: "Inheritance lets a child class extend a parent: class Puppy extends Dog. The child inherits all non-private fields and methods. @Override lets the child replace a parent method with its own version. super() calls the parent constructor. Inheritance reduces code duplication and models real-world is-a relationships.",
        },
        {
          t: "Polymorphism, Abstraction & Interfaces",
          d: "Polymorphism lets one variable hold different types: Animal a = new Dog(). Abstract classes define a template with abstract methods that subclasses must implement. Interfaces define a contract: implement Runnable and you must provide a run() method. These three concepts are what make large Java systems flexible and extensible.",
        },
      ],
    },

    {
      title: "Exception Handling",
      color: "#3b82f6",
      topics: [
        {
          t: "What is an Exception?",
          d: "An exception is an unexpected event that disrupts normal program flow — like dividing by zero, accessing a null object, or opening a file that does not exist. Without handling exceptions, your program crashes with an ugly stack trace. Java forces you to handle checked exceptions — making programs robust by design.",
        },
        {
          t: "try-catch-finally — Handling Errors Gracefully",
          d: "Wrap risky code in a try block. If an exception occurs, the catch block handles it gracefully instead of crashing. finally always runs — even if an exception occurs — perfect for closing resources. You can have multiple catch blocks for different exception types, handling each one appropriately.",
        },
        {
          t: "Checked vs Unchecked Exceptions",
          d: "Checked exceptions (like IOException, SQLException) must be declared or caught — the compiler enforces this. Unchecked exceptions (like NullPointerException, ArrayIndexOutOfBoundsException) are runtime errors usually caused by programming mistakes. Understanding this distinction is essential for writing correct, compile-time-safe Java code.",
        },
        {
          t: "throw and throws — Creating & Declaring Exceptions",
          d: "throw manually triggers an exception: throw new IllegalArgumentException('Age cannot be negative'). throws in a method signature declares that the method might throw a checked exception: public void readFile() throws IOException. Together they create clear contracts about what can go wrong in your methods.",
        },
        {
          t: "Custom Exceptions",
          d: "You can create your own exception classes by extending Exception or RuntimeException: class InsufficientFundsException extends Exception. Custom exceptions make your error messages meaningful and self-documenting. They are used in every production Java application to represent domain-specific error conditions.",
        },
      ],
    },

    {
      title: "Collections Framework",
      color: "#10b981",
      topics: [
        {
          t: "Why Collections Over Arrays?",
          d: "Arrays have a fixed size set at creation. The Collections Framework provides dynamic, resizable data structures with built-in methods for sorting, searching, and iterating. ArrayList, HashMap, HashSet, and LinkedList are the four you will use in 90% of real Java programs. Learning them unlocks professional-level Java development.",
        },
        {
          t: "ArrayList — Dynamic Arrays",
          d: "ArrayList<String> list = new ArrayList<>(); grows and shrinks automatically. Key methods: add(), get(index), remove(), size(), contains(), sort(), and clear(). Generics (<String>) enforce type safety at compile time — you cannot accidentally add an integer to a list of strings. ArrayList is the most used collection in Java.",
        },
        {
          t: "HashMap — Key-Value Storage",
          d: "HashMap<String, Integer> map = new HashMap<>(); stores key-value pairs with O(1) average lookup time. put(key, value) adds an entry. get(key) retrieves it. containsKey() checks existence. Iterate with entrySet(). HashMap is used for counting frequencies, caching results, grouping data, and almost every real-world data processing task.",
        },
        {
          t: "HashSet, LinkedList & Stack",
          d: "HashSet stores unique elements with no duplicates and O(1) lookup — perfect for deduplication. LinkedList supports efficient insertion/deletion at both ends. Stack follows LIFO (Last In First Out). Each collection has a specific use case — choosing the right one for the job is a core Java engineering skill.",
        },
        {
          t: "Iterating Collections — Iterator & for-each",
          d: "Use the for-each loop for clean iteration: for (String s : list). Use an Iterator when you need to remove elements while iterating — removing during a for-each causes ConcurrentModificationException. Collections.sort() sorts lists. Comparator lets you define custom sort orders — essential for sorting objects by any field.",
        },
      ],
    },

    {
      title: "Java 8+ Modern Features",
      color: "#e0a419",
      topics: [
        {
          t: "Lambda Expressions — Shorter Code",
          d: "Lambdas are anonymous functions that reduce boilerplate. Instead of creating a whole anonymous class to sort, write: list.sort((a, b) -> a.compareTo(b)). The arrow -> separates parameters from the body. Lambdas work wherever a functional interface (an interface with one method) is expected — which is everywhere in modern Java.",
        },
        {
          t: "Streams API — Process Collections Elegantly",
          d: "The Streams API lets you process collections with a pipeline of operations: filter, map, sorted, collect. list.stream().filter(s -> s.startsWith('A')).collect(Collectors.toList()) returns all strings starting with A. Streams make data processing code 3–5x shorter and much more readable than traditional for loops.",
        },
        {
          t: "Optional — Avoiding NullPointerException",
          d: "NullPointerException is the most common Java bug. Optional<T> is a container that may or may not hold a value. Instead of returning null from a method, return Optional.empty(). Use isPresent() or ifPresent() to check safely. Optional makes null handling explicit and eliminates an entire class of runtime crashes.",
        },
        {
          t: "Records — Compact Data Classes",
          d: "Java 16+ records replace boilerplate-heavy data classes. record Point(int x, int y) {} automatically generates constructor, getters, equals(), hashCode(), and toString(). What used to take 30 lines now takes 1 line. Records are immutable by default — perfect for data transfer objects (DTOs) in modern Spring Boot apps.",
        },
        {
          t: "var — Local Variable Type Inference",
          d: "Java 10+ introduced var for local variable type inference: var list = new ArrayList<String>() — Java infers the type automatically. Use var when the type is obvious from the right side. Avoid it when it reduces clarity. var reduces verbosity without sacrificing type safety — Java is still 100% statically typed.",
        },
      ],
    },

    {
      title: "File I/O, Git & Build Tools",
      color: "#f7c651",
      topics: [
        {
          t: "File Handling — Read & Write Files",
          d: "Java's java.nio.file package is the modern way to work with files. Files.readAllLines(Path.of('file.txt')) reads all lines into a List. Files.write() writes content. Always use try-with-resources: try (BufferedReader br = new BufferedReader(new FileReader('file.txt'))) — it auto-closes the file even if an error occurs.",
        },
        {
          t: "Git & GitHub — Version Control",
          d: "Git saves every version of your code so you never lose work. git init starts tracking. git add . stages all files. git commit -m 'message' saves a snapshot. git push uploads to GitHub. Every Java job requires Git. GitHub is your public portfolio — push every project you build so employers can see your work.",
        },
        {
          t: "Maven — Managing Dependencies",
          d: "Maven is Java's most popular build tool and dependency manager. A pom.xml file lists your project dependencies — Maven automatically downloads them from Maven Central. mvn compile builds the project. mvn test runs tests. mvn package creates a JAR file. Every Spring Boot project uses Maven or Gradle.",
        },
        {
          t: "Gradle — Modern Build Tool",
          d: "Gradle is a newer, faster alternative to Maven using a Groovy or Kotlin DSL instead of XML. Spring Boot supports both. Gradle's incremental builds only recompile what changed — making it significantly faster for large projects. Android Studio uses Gradle exclusively. Knowing both Maven and Gradle makes you versatile.",
        },
        {
          t: "IntelliJ IDEA Tips — Work Faster",
          d: "IntelliJ IDEA is the most productive Java IDE in the world. Essential shortcuts: Ctrl+Space (autocomplete), Ctrl+/ (comment/uncomment), Alt+Enter (quick fix), Shift+F6 (rename everywhere), Ctrl+B (go to definition), Ctrl+Shift+F10 (run). Learning the IDE shortcuts can double your coding speed within a week.",
        },
      ],
    },

    {
      title: "Spring Boot & Projects",
      color: "#10b981",
      topics: [
        {
          t: "What is Spring Boot and Why Does It Matter?",
          d: "Spring Boot is the most popular Java framework for building backend APIs and enterprise applications. It eliminates boilerplate configuration — you get a production-ready server in minutes. Adding @RestController and @GetMapping turns a plain Java method into an HTTP endpoint. It is required knowledge for virtually every Java backend job.",
        },
        {
          t: "Building a REST API with Spring Boot",
          d: "@RestController marks a class as an API controller. @GetMapping, @PostMapping, @PutMapping, @DeleteMapping handle HTTP methods. @RequestBody reads JSON from the request. @PathVariable reads URL parameters. In 50 lines of code you can have a fully functional REST API running on localhost:8080 — this is the core skill employers look for.",
        },
        {
          t: "Database Integration — Spring Data JPA & Hibernate",
          d: "Spring Data JPA connects your app to a database with almost no SQL. Define an entity with @Entity and @Id, create a JpaRepository interface, and Spring generates all CRUD operations automatically. Hibernate translates Java objects to database rows. Use MySQL or PostgreSQL in production, H2 in-memory for testing.",
        },
        {
          t: "Student Grade System — Beginner Project",
          d: "Build a console application that manages students — add, view, update, and delete student records with grades. Use OOP (Student class), ArrayList for storage, Scanner for input, and file handling to persist data. This covers the entire Core Java curriculum in one practical project and is perfect for a beginner portfolio.",
        },
        {
          t: "Employee Management REST API — Intermediate Project",
          d: "Build a full Spring Boot REST API with CRUD operations for employees. Store data in MySQL using Spring Data JPA. Add input validation with @Valid. Test all endpoints with Postman. This is the standard beginner Spring Boot project — nearly every Java job application will ask if you have built something like this.",
        },
      ],
    },
  ],

  "AI & ML": [
    {
      title: "Python Programming",
      color: "#3b82f6",
      topics: [
        {
          t: "What is Python & Why use it for AI?",
          d: "Python is the most popular language for AI and ML. It reads almost like plain English, has thousands of ready-made tools, and is used by companies like Google, Netflix, and Tesla for their AI systems.",
        },
        {
          t: "Variables, Loops & Functions",
          d: "Variables store information. Loops repeat actions automatically. Functions are reusable blocks of code. These three concepts are the foundation of every Python program you will ever write.",
        },
        {
          t: "OOP — Classes & Objects",
          d: "Object-Oriented Programming lets you organize code into reusable blueprints called classes. Think of a class like a cookie cutter — you define the shape once and create as many cookies as you want.",
        },
        {
          t: "File Handling & Exception Handling",
          d: "File handling lets your program read and write data to files. Exception handling stops your program from crashing when something goes wrong — like getting an error message instead of a blank screen.",
        },
        {
          t: "Writing Clean & Readable Code",
          d: "Clean code is easy to read, understand, and fix. Good naming, short functions, and proper comments make your code professional. This skill separates beginners from real developers.",
        },
      ],
    },

    {
      title: "Math & Statistics Basics",
      color: "#f59e0b",
      topics: [
        {
          t: "Why does Math matter in ML?",
          d: "Machine learning models are math under the hood. You do not need to be a math genius, but understanding the basics helps you know why your model works and how to fix it when it does not.",
        },
        {
          t: "Linear Algebra — Vectors & Matrices",
          d: "Vectors are just lists of numbers. Matrices are tables of numbers. ML models store and process all data as matrices — every image, sentence, or data row becomes a matrix before the model sees it.",
        },
        {
          t: "Statistics — Mean, Variance & Correlation",
          d: "Mean is the average. Variance tells you how spread out the data is. Correlation tells you if two things move together. These three ideas help you understand your data before building any model.",
        },
        {
          t: "Probability — How likely is something?",
          d: "Probability measures how likely something is to happen on a scale of 0 to 1. ML models use probability to make decisions — like 'there is a 90% chance this email is spam'.",
        },
        {
          t: "Calculus Basics — Gradients",
          d: "You do not need deep calculus, but gradients are important. A gradient tells the model which direction to adjust to make fewer mistakes. This is how all ML models learn and improve over time.",
        },
      ],
    },

    {
      title: "Data Foundation",
      color: "#06b6d4",
      topics: [
        {
          t: "NumPy — Working with Numbers Fast",
          d: "NumPy lets you work with large lists of numbers extremely fast. Instead of a slow Python loop to add 1 million numbers, NumPy does it in one line instantly. Every ML library is built on top of NumPy.",
        },
        {
          t: "Pandas — Working with Tables of Data",
          d: "Pandas lets you load, view, filter, and edit data that comes in tables — like Excel sheets but in Python. Most real datasets you will work with are loaded using Pandas first.",
        },
        {
          t: "Loading Data from Different Sources",
          d: "Data comes from many places — CSV files, Excel sheets, databases, and websites. Learning to load data from all these sources is the very first step before any ML work can begin.",
        },
        {
          t: "Exploratory Data Analysis (EDA)",
          d: "EDA means getting to know your data before building a model. You look at averages, check for strange values, find patterns, and ask questions. It is like reading a book before writing a summary.",
        },
        {
          t: "Matplotlib & Seaborn — Visualizing Data",
          d: "Charts and graphs help you see patterns that are invisible in raw numbers. Matplotlib and Seaborn create line charts, bar charts, histograms, and heatmaps to make data easy to understand.",
        },
      ],
    },

    {
      title: "Data Cleaning & Pre-processing",
      color: "#10b981",
      topics: [
        {
          t: "What is Data Cleaning?",
          d: "Real-world data is messy — it has missing values, typos, duplicates, and wrong formats. Data cleaning fixes all these problems. Garbage in, garbage out — a bad dataset always produces a bad model.",
        },
        {
          t: "Handling Missing Values",
          d: "Some rows in your data will have blank cells. You can either remove those rows, or fill the blanks with a reasonable value like the average. Choosing the right approach affects your model's accuracy.",
        },
        {
          t: "Removing Duplicates & Fixing Errors",
          d: "Duplicate rows can trick your model into thinking certain data is more common than it is. Fixing errors like wrong data types or impossible values (like a negative age) keeps your data trustworthy.",
        },
        {
          t: "Encoding & Scaling",
          d: "ML models only understand numbers. Encoding converts text categories (like 'cat' and 'dog') into numbers. Scaling makes sure all numbers are in a similar range so one feature does not dominate.",
        },
        {
          t: "Feature Engineering — Creating Better Inputs",
          d: "Sometimes the raw data is not enough. Feature engineering means creating new useful columns from existing ones — like extracting the day of the week from a date to help predict sales.",
        },
      ],
    },

    {
      title: "ML Foundations",
      color: "#f97316",
      topics: [
        {
          t: "What is Machine Learning?",
          d: "Machine learning is teaching a computer to learn from examples instead of giving it exact rules. You show it thousands of cat photos and it learns what a cat looks like — without you ever writing 'if ears then cat'.",
        },
        {
          t: "Types of ML — Supervised, Unsupervised & Reinforcement",
          d: "Supervised learning uses labeled examples. Unsupervised learning finds hidden patterns in unlabeled data. Reinforcement learning learns by trial and error with rewards — like training a dog with treats.",
        },
        {
          t: "Train & Test Split — Does it Really Work?",
          d: "You split your data into two parts. The model trains on one part and is tested on the other part it has never seen. This tells you if the model actually learned something or just memorized the answers.",
        },
        {
          t: "Overfitting & Underfitting",
          d: "Overfitting is when a model memorizes the training data but fails on new data — like a student who memorizes past papers but cannot answer new questions. Underfitting is when the model does not learn enough at all.",
        },
        {
          t: "Cross-Validation — Testing More Thoroughly",
          d: "Instead of one train-test split, cross-validation splits data multiple times and tests on each part. This gives a more reliable picture of how well your model really works on new unseen data.",
        },
      ],
    },

    {
      title: "ML Algorithms",
      color: "#ef4444",
      topics: [
        {
          t: "Scikit-learn — Your ML Toolbox",
          d: "Scikit-learn is a free Python library with ready-made implementations of almost every ML algorithm. You do not build algorithms from scratch — you call them in a few lines of code and focus on the problem.",
        },
        {
          t: "Regression — Predicting Numbers",
          d: "Regression predicts a number — like a house price or tomorrow's temperature. Linear Regression is the simplest form: it draws the best straight line through your data to make predictions.",
        },
        {
          t: "Classification — Predicting Categories",
          d: "Classification predicts which group something belongs to — spam or not spam, cat or dog, sick or healthy. Algorithms like Logistic Regression, Decision Trees, and Random Forests are used for this.",
        },
        {
          t: "Clustering — Finding Hidden Groups",
          d: "Clustering groups similar items together without being told the groups in advance. K-Means is the most popular method — it splits your data into K groups based on similarity. Used in customer segmentation.",
        },
        {
          t: "Evaluation Metrics — Is Your Model Good?",
          d: "Accuracy alone is not enough to judge a model. Precision, Recall, F1-Score, and ROC-AUC each measure different things. For example — a cancer detection model values Recall more than Accuracy.",
        },
      ],
    },

    {
      title: "Model Selection & Tuning",
      color: "#8b5cf6",
      topics: [
        {
          t: "How to Choose the Right Model?",
          d: "Different problems need different models. Classification problems use different algorithms than regression. The size of your data, the number of features, and your accuracy goal all affect which model to pick.",
        },
        {
          t: "Hyperparameter Tuning",
          d: "Every ML algorithm has settings called hyperparameters — like how deep a decision tree should grow. Tuning these settings improves accuracy. Grid Search tries every combination to find the best one.",
        },
        {
          t: "Handling Imbalanced Datasets",
          d: "If 95% of your data is one class and 5% is another, the model learns to always predict the majority. Techniques like SMOTE create extra examples of the rare class to balance the dataset.",
        },
        {
          t: "SQL for ML — Getting Data from Databases",
          d: "Most company data lives in databases. SQL lets you write queries to pull exactly the data you need. Learning basic SELECT, WHERE, GROUP BY, and JOIN commands is essential for any ML engineer.",
        },
        {
          t: "Git & Version Control for ML Projects",
          d: "Git saves every version of your code so you never lose work. GitHub lets you share your ML projects publicly, collaborate with others, and build a portfolio that employers can see.",
        },
      ],
    },

    {
      title: "Deep Learning",
      color: "#ec4899",
      topics: [
        {
          t: "What is Deep Learning?",
          d: "Deep learning uses neural networks with many layers to learn from huge amounts of data. It powers face recognition, voice assistants, self-driving cars, and ChatGPT — the most powerful AI systems today.",
        },
        {
          t: "Neural Networks — How do they learn?",
          d: "A neural network passes data through layers of connected nodes. Each layer transforms the data slightly. The network adjusts its connections (weights) after every mistake until it gets better — called backpropagation.",
        },
        {
          t: "CNNs — For Images & Computer Vision",
          d: "Convolutional Neural Networks are designed for images. They scan the image in small patches to detect edges, shapes, and patterns. CNNs power face recognition, disease detection from X-rays, and self-driving cars.",
        },
        {
          t: "RNNs & LSTMs — For Sequences & Text",
          d: "Recurrent Neural Networks process data in order — like reading a sentence word by word. LSTMs are an improved version that remembers important information over long sequences. Used in translation and speech recognition.",
        },
        {
          t: "TensorFlow & PyTorch — Deep Learning Frameworks",
          d: "TensorFlow (by Google) and PyTorch (by Meta) are the two main deep learning frameworks. They handle the heavy math automatically so you can focus on designing your neural network architecture.",
        },
      ],
    },

    {
      title: "NLP & Generative AI",
      color: "#84cc16",
      topics: [
        {
          t: "What is NLP — Teaching Machines to Read",
          d: "Natural Language Processing (NLP) lets computers understand and generate human language. It powers spam filters, autocomplete, chatbots, voice assistants, and tools like ChatGPT.",
        },
        {
          t: "Text Pre-processing — Cleaning Text Data",
          d: "Before feeding text to a model you must clean it — remove punctuation, lowercase everything, split into words (tokenization), and reduce words to their root form (lemmatization). This is the first step in any NLP project.",
        },
        {
          t: "Word Embeddings — Words as Numbers",
          d: "Computers cannot read words — only numbers. Word2Vec and GloVe convert words into lists of numbers (vectors) where similar words are close together. 'King - Man + Woman = Queen' is a famous example.",
        },
        {
          t: "Transformers & LLMs — The Modern Way",
          d: "Transformers are the architecture behind GPT, BERT, and all modern AI tools. They read entire sentences at once using 'attention' — understanding context far better than older methods. LLMs are massive Transformer models.",
        },
        {
          t: "Prompt Engineering & RAG",
          d: "Prompt Engineering is writing clear instructions to get better answers from AI models like ChatGPT. RAG (Retrieval-Augmented Generation) connects an LLM to your own documents so it answers from your specific knowledge base.",
        },
      ],
    },

    {
      title: "Responsible AI & MLOps",
      color: "#e0a419",
      topics: [
        {
          t: "What is Responsible AI?",
          d: "AI can be biased, unfair, or harmful if built carelessly. Responsible AI means checking your model for bias, ensuring fairness across groups, and being transparent about how it makes decisions.",
        },
        {
          t: "AI Ethics & Hallucinations",
          d: "AI models sometimes make up wrong answers confidently — called hallucinations. Guardrails are safety checks added to prevent harmful or false outputs. Ethics in AI ensures the technology helps people rather than harms them.",
        },
        {
          t: "Model Monitoring — After Deployment",
          d: "A model's performance can degrade over time as the real world changes — called data drift. Monitoring tracks accuracy in production and sends alerts when the model needs to be retrained with new data.",
        },
        {
          t: "FastAPI — Serving Your ML Model",
          d: "After training a model, you wrap it in an API so other apps can use it. FastAPI lets you build a simple server where any app sends data and gets back a prediction — in just a few lines of Python.",
        },
        {
          t: "Docker & CI/CD — Deploying Reliably",
          d: "Docker packages your model and all its dependencies into a container that runs the same everywhere. CI/CD pipelines automatically test and deploy your model when you push new code — used in every real ML team.",
        },
      ],
    },

    {
      title: "Build ML Projects",
      color: "#f7c651",
      topics: [
        {
          t: "House Price Prediction — Beginner",
          d: "Predict house prices from features like size, location, and rooms using Linear Regression. A classic first ML project that covers the full pipeline — data loading, cleaning, training, and evaluating a model.",
        },
        {
          t: "Handwritten Digit Classifier — Beginner",
          d: "Train a model to recognize handwritten numbers 0–9 using the famous MNIST dataset. This is the 'Hello World' of deep learning and teaches you how image classification models work.",
        },
        {
          t: "Sentiment Analysis — Intermediate",
          d: "Build a model that reads a review or tweet and decides if it is positive, negative, or neutral. Covers text cleaning, word embeddings, and classification — a very practical NLP project.",
        },
        {
          t: "Customer Churn Prediction — Intermediate",
          d: "Predict which customers are likely to cancel a subscription. Uses classification models with real business data. Shows companies who to target with offers before they lose the customer.",
        },
        {
          t: "GenAI Chatbot with RAG — Advanced",
          d: "Build an AI chatbot that answers questions from your own documents using RAG. Connect an LLM (like GPT) to a PDF or website, wrap it in a FastAPI server, and build a simple chat UI — a full AI product.",
        },
      ],
    },

    {
      title: "Capstone Projects",
      color: "#10b981",
      topics: [
        {
          t: "Image Classification / Disease Detection",
          d: "Train a CNN to detect diseases from medical images like chest X-rays. A high-impact project that combines deep learning with real healthcare use — great for portfolios and interviews.",
        },
        {
          t: "Recommendation System",
          d: "Build a system that suggests movies, products, or songs based on user history — like how Netflix and Spotify work. Covers collaborative filtering and content-based approaches.",
        },
        {
          t: "Real-Time Object Detection",
          d: "Use a pre-trained model like YOLO to detect and label objects in a live video feed. This advanced computer vision project shows you can work with real-time AI systems.",
        },
        {
          t: "Resume Parser & Job Matcher",
          d: "Extract structured data from unstructured resumes using NLP and LLMs. Match candidates to jobs based on skills. A complete pipeline from raw PDF to structured output — impressive in any portfolio.",
        },
        {
          t: "End-to-End ML Pipeline",
          d: "The ultimate capstone — pick a real problem, collect data, clean it, train a model, evaluate it, serve it via FastAPI, containerize with Docker, and deploy to the cloud. This is how professional ML engineers work.",
        },
      ],
    },
  ],
  DSA: [
    {
      title: "Why Learn DSA?",
      color: "#f97316",
      topics: [
        {
          t: "What is DSA and Why Does It Matter?",
          d: "DSA stands for Data Structures and Algorithms. Data structures are ways to organize data, and algorithms are step-by-step instructions to solve problems. Every app you use — Google, Instagram, Uber — runs on DSA under the hood.",
        },
        {
          t: "How Computers Store Data",
          d: "Before learning DSA, understand that computers store everything in memory as 0s and 1s. RAM stores temporary data while your program runs. Knowing this helps you understand why some ways of storing data are faster than others.",
        },
        {
          t: "Big O Notation — How Fast is Your Code?",
          d: "Big O notation measures how slow or fast your code gets as data grows. O(1) means instant, O(n) means it slows linearly, O(n²) means it gets very slow. This is the single most important concept for writing efficient code.",
        },
        {
          t: "Time Complexity vs Space Complexity",
          d: "Time complexity measures how long your code takes to run. Space complexity measures how much memory it uses. Good engineers balance both — sometimes you use more memory to make things faster.",
        },
        {
          t: "Setting Up — Python or Java for DSA?",
          d: "Python is recommended for beginners because of its clean syntax. Java is preferred for interviews at product companies. Pick one and stick with it. The DSA concepts are identical — only the syntax differs.",
        },
      ],
    },
    {
      title: "Arrays & Strings",
      color: "#3b82f6",
      topics: [
        {
          t: "What is an Array?",
          d: "An array is the simplest data structure — a list of items stored one after another in memory. Think of it like a row of numbered lockers. You can instantly access any locker if you know its number (index).",
        },
        {
          t: "Array Operations — Insert, Delete, Search",
          d: "Accessing an element is O(1) — instant. Searching without sorting is O(n) — you check each element. Inserting or deleting in the middle is O(n) because you must shift all elements after it.",
        },
        {
          t: "Two Pointer Technique",
          d: "Two pointers is one of the most useful array tricks. You place one pointer at the start and one at the end, then move them toward each other. It solves problems like 'find two numbers that sum to a target' in O(n) instead of O(n²).",
        },
        {
          t: "Sliding Window Technique",
          d: "Sliding window solves problems about contiguous subarrays — like 'find the maximum sum of any 3 consecutive elements'. Instead of recalculating every time, you slide a window across the array and update incrementally. Very efficient.",
        },
        {
          t: "String Manipulation Basics",
          d: "Strings are just arrays of characters. Common problems include reversing a string, checking if it is a palindrome, finding anagrams, and counting character frequencies. These appear constantly in coding interviews.",
        },
      ],
    },
    {
      title: "Recursion & Backtracking",
      color: "#10b981",
      topics: [
        {
          t: "What is Recursion?",
          d: "Recursion is when a function calls itself to solve a smaller version of the same problem. Think of it like Russian dolls — each doll contains a smaller version of itself until you reach the smallest one. Every recursive solution needs a base case to stop.",
        },
        {
          t: "How the Call Stack Works",
          d: "Every time a function calls itself, it gets added to the call stack — a pile of function calls waiting to finish. When the base case is reached, the stack unwinds from top to bottom. Understanding this prevents infinite recursion and stack overflow errors.",
        },
        {
          t: "Classic Recursion Problems",
          d: "Start with Factorial (n! = n × (n-1)!), Fibonacci sequence, and Power of a number. These build your intuition for breaking a problem into smaller identical subproblems — the core skill of recursive thinking.",
        },
        {
          t: "What is Backtracking?",
          d: "Backtracking is a smarter version of brute force. You try a path, and if it does not work, you undo the last step and try another. It is like navigating a maze — if you hit a dead end, you go back to the last junction and try a different direction.",
        },
        {
          t: "Backtracking Problems — N-Queens & Subsets",
          d: "Classic backtracking problems include generating all subsets of a set, all permutations of a string, solving Sudoku, and placing N queens on a chessboard without conflict. These are frequently asked in FAANG-level interviews.",
        },
      ],
    },
    {
      title: "Linked Lists",
      color: "#8b5cf6",
      topics: [
        {
          t: "What is a Linked List?",
          d: "A linked list is a chain of nodes where each node holds data and a pointer to the next node. Unlike arrays, nodes are scattered in memory — not stored together. Think of it like a treasure hunt where each clue points to the next location.",
        },
        {
          t: "Singly vs Doubly Linked List",
          d: "A singly linked list has pointers going only forward. A doubly linked list has pointers going both forward and backward — making it easier to traverse in reverse but using more memory. Both are used in real-world systems like browser history.",
        },
        {
          t: "Linked List Operations",
          d: "Insertion and deletion at the head is O(1) — very fast. But searching for a value requires traversing the whole list — O(n). This is the key trade-off: linked lists are great for frequent insertions but poor for random access.",
        },
        {
          t: "Two Pointer Tricks on Linked Lists",
          d: "Two pointers unlock powerful linked list techniques. Use a slow and fast pointer to detect a cycle (Floyd's algorithm), find the middle of a list in one pass, or find the nth node from the end without knowing the length.",
        },
        {
          t: "Reversing a Linked List",
          d: "Reversing a linked list is one of the most asked interview questions. The iterative approach uses three pointers (prev, current, next) and takes O(n) time. The recursive approach is elegant but uses O(n) stack space. Master both.",
        },
      ],
    },
    {
      title: "Stacks & Queues",
      color: "#ec4899",
      topics: [
        {
          t: "What is a Stack?",
          d: "A stack follows LIFO — Last In, First Out. Think of a stack of plates: you always add and remove from the top. Push adds an item, Pop removes the top item. Stacks are used in undo/redo, browser back button, and function call management.",
        },
        {
          t: "What is a Queue?",
          d: "A queue follows FIFO — First In, First Out. Think of a line at a ticket counter: the first person in is the first person served. Enqueue adds to the back, Dequeue removes from the front. Queues are used in task scheduling and BFS graph traversal.",
        },
        {
          t: "Stack Problems — Valid Parentheses & Next Greater Element",
          d: "The most classic stack problem is checking balanced brackets — push open brackets, pop when you see a closing one. The Next Greater Element pattern uses a monotonic stack to find the nearest larger value efficiently in O(n).",
        },
        {
          t: "Monotonic Stack — A Powerful Pattern",
          d: "A monotonic stack maintains elements in increasing or decreasing order. It solves problems like 'largest rectangle in a histogram', 'daily temperatures', and 'stock span' — all in O(n). This pattern appears very frequently in interviews.",
        },
        {
          t: "Deque & Priority Queue",
          d: "A Deque (Double-Ended Queue) allows insertion and deletion from both ends — used in the sliding window maximum problem. A Priority Queue (Min/Max Heap) always gives you the smallest or largest element first — essential for scheduling and graph algorithms.",
        },
      ],
    },
    {
      title: "Sorting Algorithms",
      color: "#f59e0b",
      topics: [
        {
          t: "Why Sorting Matters",
          d: "Sorting is one of the most fundamental operations in computing. Once data is sorted, searching becomes O(log n) instead of O(n). Many algorithms require sorted input. Understanding sorting builds intuition for algorithm design and Big O analysis.",
        },
        {
          t: "Bubble, Selection & Insertion Sort",
          d: "These three are the beginner sorting algorithms — all O(n²) in the worst case. Bubble sort repeatedly swaps adjacent elements. Selection sort finds the minimum and places it. Insertion sort builds a sorted list one element at a time. Learn them for intuition, not production.",
        },
        {
          t: "Merge Sort — Divide & Conquer",
          d: "Merge sort splits the array in half, sorts each half recursively, then merges them back. It always runs in O(n log n) and is stable — equal elements keep their original order. It is used when you need guaranteed performance and extra memory is available.",
        },
        {
          t: "Quick Sort — The Fastest in Practice",
          d: "Quick sort picks a pivot, places all smaller elements left and larger ones right, then recurses on both sides. Average case is O(n log n) and it sorts in-place using no extra memory. It is the most used sorting algorithm in real systems.",
        },
        {
          t: "Counting Sort & Radix Sort",
          d: "When your data is integers in a known range, Counting Sort runs in O(n) — faster than any comparison-based sort. Radix Sort extends this to larger numbers by sorting digit by digit. These break the theoretical O(n log n) lower bound for sorting.",
        },
      ],
    },
    {
      title: "Searching & Hashing",
      color: "#06b6d4",
      topics: [
        {
          t: "Linear Search vs Binary Search",
          d: "Linear search checks every element — O(n). Binary search only works on sorted data but eliminates half the search space each step — O(log n). If you search a list of 1 billion elements, binary search takes just 30 steps. That is the power of logarithmic complexity.",
        },
        {
          t: "Binary Search on the Answer",
          d: "Binary search is not just for sorted arrays — you can binary search on the answer itself. If you are asked 'find the minimum X such that condition Y is true', binary search on X. This pattern solves problems like 'minimum days to make bouquets' and 'koko eating bananas'.",
        },
        {
          t: "What is a Hash Table?",
          d: "A hash table stores key-value pairs and gives you O(1) average time for insert, delete, and search. A hash function converts your key into an array index. It is the most important data structure for solving interview problems — used in almost every medium-level question.",
        },
        {
          t: "Hash Collisions & How They Are Handled",
          d: "Two keys can hash to the same index — called a collision. Chaining stores multiple values at the same index using a linked list. Open addressing finds the next empty slot. Python dictionaries and Java HashMaps handle collisions automatically.",
        },
        {
          t: "HashMap Patterns in Interviews",
          d: "Common HashMap patterns include: counting character frequencies, finding duplicates, two-sum problem, grouping anagrams, and longest substring without repeating characters. These appear in nearly every technical interview. Master the HashMap and you unlock dozens of problems.",
        },
      ],
    },
    {
      title: "Trees",
      color: "#84cc16",
      topics: [
        {
          t: "What is a Tree?",
          d: "A tree is a hierarchical data structure with a root node at the top and child nodes below. Every node except the root has exactly one parent. Trees are everywhere — your computer file system, HTML DOM, company org charts, and decision-making in AI all use trees.",
        },
        {
          t: "Binary Tree & Binary Search Tree",
          d: "A Binary Tree has at most two children per node (left and right). A Binary Search Tree (BST) adds an ordering rule: all values in the left subtree are smaller, all in the right are larger. This makes search O(log n) for balanced BSTs.",
        },
        {
          t: "Tree Traversals — Inorder, Preorder, Postorder",
          d: "Traversal means visiting every node. Inorder (left → root → right) visits a BST in sorted order. Preorder (root → left → right) is used for copying trees. Postorder (left → right → root) is used for deleting trees. BFS (level-order) uses a queue to visit level by level.",
        },
        {
          t: "Tree Recursion Patterns",
          d: "Most tree problems are solved recursively. The pattern is: handle the base case (null node), recursively solve for left subtree, recursively solve for right subtree, combine results. This pattern solves height, diameter, path sum, lowest common ancestor, and dozens more.",
        },
        {
          t: "Balanced Trees — AVL & Red-Black Trees",
          d: "A regular BST can become a straight line (skewed) making it O(n) for search. Balanced trees like AVL Trees and Red-Black Trees automatically rebalance after insertions and deletions, guaranteeing O(log n) always. Java's TreeMap and C++ map use Red-Black Trees internally.",
        },
      ],
    },
    {
      title: "Heaps & Graphs",
      color: "#ef4444",
      topics: [
        {
          t: "What is a Heap?",
          d: "A heap is a special tree where the parent is always greater than (Max Heap) or smaller than (Min Heap) its children. It gives you the maximum or minimum element in O(1) and insertion/deletion in O(log n). Heaps power Priority Queues used in scheduling, Dijkstra's algorithm, and more.",
        },
        {
          t: "Top K Problems Using Heaps",
          d: "Heaps are perfect for 'Top K' problems — find the K largest elements, K most frequent elements, K closest points to origin. Keep a heap of size K as you process elements. This gives O(n log k) which is much better than sorting the entire array O(n log n).",
        },
        {
          t: "What is a Graph?",
          d: "A graph is a collection of nodes (vertices) connected by edges. Unlike trees, graphs can have cycles, disconnected parts, and edges with weights. Real-world graphs include road networks, social networks, the internet, and flight routes.",
        },
        {
          t: "BFS & DFS — Graph Traversal",
          d: "BFS (Breadth-First Search) uses a queue and explores all neighbors before going deeper — perfect for finding shortest paths in unweighted graphs. DFS (Depth-First Search) uses a stack or recursion and goes as deep as possible first — perfect for detecting cycles and topological sort.",
        },
        {
          t: "Dijkstra's Algorithm — Shortest Path",
          d: "Dijkstra's algorithm finds the shortest path between nodes in a weighted graph. It uses a Min Heap to always process the closest unvisited node next. It powers Google Maps, network routing, and game pathfinding. Time complexity is O((V + E) log V).",
        },
      ],
    },
    {
      title: "Dynamic Programming",
      color: "#e0a419",
      topics: [
        {
          t: "What is Dynamic Programming?",
          d: "Dynamic Programming (DP) solves problems by breaking them into overlapping subproblems and storing results to avoid recomputation. If recursion is brute force, DP is the optimized version. It is the hardest topic in DSA but appears in almost every advanced interview.",
        },
        {
          t: "Memoization — Top-Down DP",
          d: "Memoization stores the result of each recursive call in a cache (dictionary). Before computing, check if the answer is already cached. This converts exponential recursion like Fibonacci from O(2^n) to O(n). This is the easiest way to start learning DP.",
        },
        {
          t: "Tabulation — Bottom-Up DP",
          d: "Tabulation builds the solution from the smallest subproblem upward using a table (array). No recursion involved — just loops and a table. It uses less memory than memoization and avoids stack overflow. Most optimized DP solutions use tabulation.",
        },
        {
          t: "Classic DP Problems",
          d: "The must-know DP problems are: Fibonacci, Climbing Stairs, 0/1 Knapsack, Longest Common Subsequence, Longest Increasing Subsequence, Coin Change, and Edit Distance. Mastering these 7 problems gives you the pattern recognition needed to solve most DP interview questions.",
        },
        {
          t: "2D DP & DP on Strings",
          d: "2D DP uses a 2D table where dp[i][j] represents the solution for a subproblem involving the first i elements of one input and first j elements of another. It solves string problems like Edit Distance (minimum operations to convert one string to another) and Matrix Chain Multiplication.",
        },
      ],
    },
    {
      title: "Practice & Patterns",
      color: "#f7c651",
      topics: [
        {
          t: "The 14 Coding Patterns You Must Know",
          d: "Most interview problems fall into patterns: Sliding Window, Two Pointers, Fast & Slow Pointers, Merge Intervals, Cyclic Sort, In-place Reversal, BFS, DFS, Two Heaps, Subsets, Modified Binary Search, Top K Elements, K-way Merge, and Dynamic Programming. Recognize the pattern, solve the problem.",
        },
        {
          t: "How to Approach Any DSA Problem",
          d: "Step 1: Understand the problem and constraints. Step 2: Work through small examples by hand. Step 3: Identify the pattern. Step 4: Write the brute force solution first. Step 5: Optimize using the right data structure. Step 6: Test edge cases. Never skip to code before thinking.",
        },
        {
          t: "LeetCode Study Plan for Beginners",
          d: "Start with LeetCode Easy problems — aim for 50. Then move to Medium — aim for 100. Focus on arrays, strings, hashmaps, and trees first. Do problems by topic, not randomly. Review solutions after every attempt even if you solved it — there is always a better way.",
        },
        {
          t: "Must-Solve Problems Before Any Interview",
          d: "Two Sum, Valid Parentheses, Merge Two Sorted Lists, Best Time to Buy/Sell Stock, Valid Palindrome, Reverse Linked List, Maximum Subarray (Kadane's Algorithm), Climbing Stairs, Binary Search, Level Order Traversal. These 10 problems appear in interviews at every level.",
        },
        {
          t: "NeetCode 150 & Blind 75",
          d: "The Blind 75 is a curated list of 75 problems that cover every important pattern. NeetCode 150 expands this with video explanations. If you solve all problems in Blind 75 with understanding, you are ready for most software engineering interviews at top companies.",
        },
      ],
    },
  ],

  "Full Stack": [
    {
      title: "How the Internet Works",
      color: "#f97316",
      topics: [
        {
          t: "What is the Internet?",
          d: "The internet is a huge network of computers connected together worldwide. When you open a website, your computer sends a request and gets a response back — just like asking a question and getting an answer.",
        },
        {
          t: "What is HTTP & HTTPS?",
          d: "HTTP is the language browsers and servers use to talk to each other. HTTPS is the secure version — it locks your data so no one can spy on it while it travels across the internet.",
        },
        {
          t: "How does a Browser work?",
          d: "When you type a URL, your browser fetches the HTML, CSS, and JavaScript files, reads them, and draws the webpage on your screen. Think of it like following a recipe to cook a meal.",
        },
        {
          t: "What is DNS?",
          d: "DNS is like a phonebook for the internet. When you type 'google.com', DNS looks up the actual address (IP) of that server so your browser knows where to go.",
        },
        {
          t: "What is Web Hosting?",
          d: "Hosting is renting space on a server so your website is available 24/7 on the internet. Beginner-friendly options include Vercel, Netlify, and GitHub Pages — all free to start.",
        },
      ],
    },

    {
      title: "HTML — Structure of a Page",
      color: "#e44d26",
      topics: [
        {
          t: "What is HTML?",
          d: "HTML is the skeleton of every webpage. It uses tags like <h1>, <p>, and <img> to tell the browser what content to show — headings, paragraphs, images, links, and more.",
        },
        {
          t: "HTML Tags & Elements",
          d: "Tags are the building blocks of HTML. You wrap content inside opening and closing tags like <p>Hello</p>. Learning the common tags is the very first step in web development.",
        },
        {
          t: "HTML Forms & Inputs",
          d: "Forms let users type in data — like a login page or a search bar. You use input fields, buttons, and dropdowns to collect information from visitors.",
        },
        {
          t: "HTML Lists & Tables",
          d: "Lists (bullet points and numbered lists) and tables help you organize and display information clearly on a page — very commonly used in real websites.",
        },
        {
          t: "Semantic HTML",
          d: "Semantic tags like <header>, <nav>, <main>, and <footer> give meaning to your page structure. They make your code easier to read and help search engines understand your site.",
        },
      ],
    },

    {
      title: "CSS — Styling Your Page",
      color: "#2965f1",
      topics: [
        {
          t: "What is CSS?",
          d: "CSS makes your HTML look good. It controls colors, fonts, spacing, sizes, and layouts. Without CSS, every website would just be plain black text on a white background.",
        },
        {
          t: "Colors, Fonts & Box Model",
          d: "The box model is how every element is sized — it has content, padding, border, and margin. Controlling these four things gives you full control over how elements look and sit on the page.",
        },
        {
          t: "Flexbox — Arrange Things in a Row or Column",
          d: "Flexbox is a simple way to arrange items side by side or stacked. It's perfect for navigation bars, card rows, and centering content — used in almost every website.",
        },
        {
          t: "CSS Grid — Build Page Layouts",
          d: "CSS Grid lets you design the overall page layout using rows and columns, like a spreadsheet. It's the best tool for building full page structures.",
        },
        {
          t: "Bootstrap & Tailwind CSS",
          d: "Bootstrap gives you ready-made components like buttons, navbars, and cards. Tailwind gives you small utility classes to style directly in HTML. Both speed up your work massively.",
        },
      ],
    },

    {
      title: "JavaScript — Make Pages Interactive",
      color: "#f7df1e",
      topics: [
        {
          t: "What is JavaScript?",
          d: "JavaScript brings your webpage to life. It can show popups, validate forms, update content without refreshing the page, and respond to every click, scroll, and keypress.",
        },
        {
          t: "Variables, Loops & Functions",
          d: "Variables store data. Loops repeat actions. Functions are reusable blocks of code. These three concepts are the foundation of all programming — not just JavaScript.",
        },
        {
          t: "DOM — Changing the Page with JS",
          d: "The DOM is a map of your HTML page that JavaScript can read and change. You can use JS to hide elements, change text, add new items, and react to user clicks.",
        },
        {
          t: "Arrays, Strings & Useful Methods",
          d: "Arrays store lists of items. Strings store text. Methods like map, filter, and includes let you work with data easily — these are used in every real JavaScript project.",
        },
        {
          t: "Fetch API — Getting Data from the Internet",
          d: "The Fetch API lets your page request data from a server in the background. This is how weather apps, news feeds, and social media timelines update without refreshing.",
        },
      ],
    },

    {
      title: "Git — Save & Track Your Code",
      color: "#f05032",
      topics: [
        {
          t: "What is Git & Why do you need it?",
          d: "Git saves every version of your code so you can go back if something breaks. It also lets multiple people work on the same project without overwriting each other's work.",
        },
        {
          t: "Basic Git Commands",
          d: "git init starts tracking a project. git add selects files. git commit saves a snapshot. git push uploads it to GitHub. These four commands cover 80% of daily Git usage.",
        },
        {
          t: "GitHub — Store Your Code Online",
          d: "GitHub is a website where you store your Git repositories online. It acts as a backup for your code and a portfolio that employers can browse to see your work.",
        },
        {
          t: "Branches — Work Without Breaking Things",
          d: "A branch is a safe copy of your code where you can experiment. When your changes work, you merge the branch back. This protects your main working code from mistakes.",
        },
        {
          t: "Pull Requests & Collaboration",
          d: "A Pull Request is how you propose changes to a project. Your teammates review the code, leave comments, and approve before it gets merged — this is how real teams work.",
        },
      ],
    },

    {
      title: "React — Build Modern UIs",
      color: "#61dafb",
      topics: [
        {
          t: "What is React & Why use it?",
          d: "React is a JavaScript library made by Facebook. Instead of rewriting the whole page on every change, React only updates the part that changed — making apps fast and smooth.",
        },
        {
          t: "Components — Lego Blocks for UIs",
          d: "A component is a small, reusable piece of UI — like a button, card, or navbar. You build pages by combining many components together, just like snapping Lego blocks.",
        },
        {
          t: "Props & State",
          d: "Props are data you pass into a component from outside. State is data the component manages itself. Together they control what a component shows and how it behaves.",
        },
        {
          t: "Hooks — useState & useEffect",
          d: "useState lets a component remember data (like a counter value). useEffect runs code when something changes (like fetching data when the page loads). Both are used constantly.",
        },
        {
          t: "React Router — Multiple Pages in One App",
          d: "React Router lets you create multiple 'pages' in your app without full page reloads. Clicking a link instantly swaps the content — making the app feel fast and native.",
        },
      ],
    },

    {
      title: "Backend — Node.js & Express",
      color: "#68a063",
      topics: [
        {
          t: "What is a Backend?",
          d: "The backend is the part of the app users never see. It handles logic, processes requests, talks to the database, and sends back the right data — like the kitchen of a restaurant.",
        },
        {
          t: "Node.js — JavaScript on the Server",
          d: "Node.js lets you run JavaScript on a server, not just in the browser. This means you can use one language (JavaScript) for both the frontend and backend — great for beginners.",
        },
        {
          t: "Express.js — Build a Simple Server",
          d: "Express makes it easy to create a server with just a few lines of code. You define routes (like /home or /login) and tell the server what to send back for each one.",
        },
        {
          t: "APIs — How Frontend Talks to Backend",
          d: "An API is a set of URLs your frontend can call to get or send data. For example, your React app calls /api/users and gets back a list of users from the server.",
        },
        {
          t: "User Login — Authentication Basics",
          d: "Authentication checks who you are. When a user logs in, the server verifies their password and gives them a token (JWT). That token is sent with future requests to prove identity.",
        },
      ],
    },

    {
      title: "Databases — Store Your Data",
      color: "#f59e0b",
      topics: [
        {
          t: "What is a Database?",
          d: "A database is where your app permanently stores data — user accounts, posts, orders, messages. Without a database, all data disappears when the server restarts.",
        },
        {
          t: "MongoDB — Beginner-Friendly NoSQL DB",
          d: "MongoDB stores data as simple JSON-like documents (like JavaScript objects). It is flexible and easy to learn — perfect for beginners building their first MERN stack app.",
        },
        {
          t: "Basic CRUD Operations",
          d: "CRUD stands for Create, Read, Update, Delete — the four things you do with data. Every app you build will use these four operations constantly with your database.",
        },
        {
          t: "SQL Databases — MySQL & PostgreSQL",
          d: "SQL databases store data in tables with rows and columns, like a spreadsheet. You use SQL queries to fetch and manage data. PostgreSQL is the most popular choice for production apps.",
        },
        {
          t: "Connecting Database to your Backend",
          d: "Your Node/Express server connects to MongoDB using Mongoose, or to PostgreSQL using Prisma. These tools make it easy to read and write data without writing complex queries.",
        },
      ],
    },

    {
      title: "Security, Performance & Deployment",
      color: "#8b5cf6",
      topics: [
        {
          t: "Basic Web Security for Beginners",
          d: "Never trust user input — always check and clean it. Use HTTPS everywhere. Hash passwords with bcrypt before storing them. These three rules prevent most common attacks.",
        },
        {
          t: "Common Attacks — XSS & SQL Injection",
          d: "XSS injects malicious scripts into your pages. SQL Injection inserts harmful code into database queries. Both are prevented by validating and sanitizing all incoming data.",
        },
        {
          t: "Making Your App Faster",
          d: "Compress images, reduce JavaScript bundle size, use lazy loading for off-screen content, and add caching. Faster apps have better user experience and rank higher on Google.",
        },
        {
          t: "Docker — Package Your App",
          d: "Docker wraps your app and all its dependencies into a container. It runs the same way on every machine — solving the classic 'it works on my computer' problem.",
        },
        {
          t: "Deploy Your App Live",
          d: "Vercel and Netlify deploy frontend apps in minutes for free. Railway and Render host your Node.js backend. These platforms are beginner-friendly and handle most setup automatically.",
        },
      ],
    },

    {
      title: "Build Real Projects",
      color: "#10b981",
      topics: [
        {
          t: "Personal Portfolio Website",
          d: "Your first project — build a portfolio page with your name, skills, and projects using HTML, CSS, and React. Deploy it free on Vercel. Share the link in every job application.",
        },
        {
          t: "To-Do List App",
          d: "A classic beginner project. Add, complete, and delete tasks. Use React for the UI and localStorage or MongoDB to save tasks. Perfect for practicing CRUD operations.",
        },
        {
          t: "Blog App — MERN Stack",
          d: "A full blog where users can sign up, write posts, and comment. Uses React frontend, Node/Express backend, and MongoDB database — your first complete full-stack app.",
        },
        {
          t: "E-Commerce Store",
          d: "Product listings, a shopping cart, and checkout with Stripe payments. This project covers complex state management, backend APIs, and connecting a real payment gateway.",
        },
        {
          t: "Real-Time Chat App",
          d: "A chat app where messages appear instantly using Socket.io. Build the UI in React and the server in Node.js. A great project that stands out in any developer portfolio.",
        },
      ],
    },
  ],
};

const VW = 760;
const STEP_H = 210;
const PAD_T = 60;
const PAD_B = 80;
const LEFT_X = 140;
const RIGHT_X = 620;
const MID_X = VW / 2;
const ROAD_W = 46;

const PIN_OPEN_ZONE = 55;
const PIN_CLOSE_ZONE = 200;
const LERP = 0.015;

const UNFREEZE_FORWARD_DELTA = 18;
const FW_COLORS = ["#f7c651", "#ffd700", "#ffe066", "#ffb800", "#fff0a0"];

function buildPath(n) {
  const totalH = PAD_T + n * STEP_H + PAD_B;
  const pins = [],
    segs = [];
  let cx = MID_X,
    cy = PAD_T;
  segs.push(`M ${cx} ${cy}`);
  for (let i = 0; i < n; i++) {
    const goLeft = i % 2 === 0;
    const px = goLeft ? LEFT_X : RIGHT_X;
    const py = PAD_T + (i + 0.52) * STEP_H;
    pins.push({ x: px, y: py, side: goLeft ? "left" : "right" });
    const nx = MID_X,
      ny = PAD_T + (i + 1) * STEP_H;
    segs.push(
      `C ${cx} ${cy + STEP_H * 0.4}, ${px} ${py - STEP_H * 0.2}, ${px} ${py}`,
    );
    segs.push(
      `C ${px} ${py + STEP_H * 0.2}, ${nx} ${ny - STEP_H * 0.1}, ${nx} ${ny}`,
    );
    cx = nx;
    cy = ny;
  }
  return { d: segs.join(" "), pins, totalH };
}

export default function RoadMap() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") !== "dark",
  );

  useEffect(() => {
    const handler = () => setIsLight(localStorage.getItem("theme") !== "dark");
    window.addEventListener("themechange", handler);
    return () => window.removeEventListener("themechange", handler);
  }, []);
  const langs = Object.keys(DATA);
  const [lang, setLang] = useState("C");
  const [openCard, setOpenCard] = useState(null);
  const [unlocked, setUnlocked] = useState(-1);
  const [activePin, setActivePin] = useState(null);
  const [emojiClass, setEmojiClass] = useState("idle");
  const [cardPos, setCardPos] = useState([]);

  const [celebrate, setCelebrate] = useState(false);
  const celebratedRef = useRef(false);
  const [pIn, setPIn] = useState(false);
  const [h1In, setH1In] = useState(false);
  const [tabsIn, setTabsIn] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [cueIn, setCueIn] = useState(false);

  const steps = DATA[lang];
  const { d: pathD, pins, totalH } = buildPath(steps.length);

  const rootRef = useRef(null);
  const svgRef = useRef(null);
  const roadRef = useRef(null);
  const shadRef = useRef(null);
  const dashRef = useRef(null);
  const emojiWrap = useRef(null);
  const rafId = useRef(null);
  const walkTimer = useRef(null);
  const prevUn = useRef(-1);
  const prevActive = useRef(null);

  const lenCache = useRef({ lang: null, totalLen: 0, pinLens: [] });
  const measuring = useRef(false);

  const langRef = useRef(lang);
  const pinsRef = useRef(pins);
  const totalHRef = useRef(totalH);

  const roadProg = useRef(0);
  const iconProg = useRef(0);

  const frozenAt = useRef(null);
  const frozenRoadProg = useRef(0);

  const theme = isLight ? "light-theme" : "dark-theme";

  useEffect(() => {
    setTimeout(() => setH1In(true), 120);
    setTimeout(() => setPIn(true), 400);
    langs.forEach((_, i) =>
      setTimeout(
        () =>
          setTabsIn((p) => {
            const n = [...p];
            n[i] = true;
            return n;
          }),
        600 + i * 110,
      ),
    );
    setTimeout(() => setCueIn(true), 1200);
  }, []);

  useEffect(() => {
    cancelAnimationFrame(rafId.current);

    const newSteps = DATA[lang];
    const { d: newD, pins: newPins, totalH: newH } = buildPath(newSteps.length);

    [roadRef, shadRef, dashRef].forEach((r) => {
      if (r.current) {
        r.current.setAttribute("d", newD);
        r.current.style.strokeDasharray = "";
        r.current.style.strokeDashoffset = "0";
      }
    });
    if (svgRef.current) {
      svgRef.current.setAttribute("viewBox", `0 0 ${VW} ${newH}`);
      svgRef.current.style.height = newH + "px";
    }
    const sceneEl = svgRef.current?.parentElement;
    if (sceneEl) sceneEl.style.height = newH + "px";
    if (emojiWrap.current) {
      emojiWrap.current.setAttribute(
        "transform",
        `translate(${MID_X - 14}, ${PAD_T - 32})`,
      );
    }

    langRef.current = lang;
    pinsRef.current = newPins;
    totalHRef.current = newH;

    setOpenCard(null);
    setUnlocked(-1);
    setActivePin(null);
    setEmojiClass("idle");
    setCardPos([]);
    setCelebrate(false);
    celebratedRef.current = false;
    prevUn.current = -1;
    prevActive.current = null;
    roadProg.current = 0;
    iconProg.current = 0;
    frozenAt.current = null;
    frozenRoadProg.current = 0;
    lenCache.current = { lang: null, totalLen: 0, pinLens: [] };

    if (rootRef.current) rootRef.current.scrollTop = 0;

    measureAndStart();
  }, [lang]);

  const measureAndStart = useCallback(() => {
    const road = roadRef.current,
      root = rootRef.current;
    if (!road || !root) return;
    const totalLen = road.getTotalLength();
    if (!totalLen) return;

    roadRef.current.style.strokeDasharray = "none";
    roadRef.current.style.strokeDashoffset = "0";
    if (shadRef.current) {
      shadRef.current.style.strokeDasharray = "none";
      shadRef.current.style.strokeDashoffset = "0";
    }
    if (dashRef.current) {
      dashRef.current.style.strokeDasharray = "10 18";
      dashRef.current.style.strokeDashoffset = "0";
    }

    roadProg.current = totalLen;
    iconProg.current = 0;
    frozenAt.current = null;
    startLoop();

    const currentPins = pinsRef.current;
    const SAMP = 120;
    const pinLens = currentPins.map((pin) => {
      let best = 0,
        bestD2 = Infinity;
      for (let s = 0; s <= SAMP; s++) {
        const t = (s / SAMP) * totalLen;
        const pt = road.getPointAtLength(t);
        const d2 = (pt.x - pin.x) ** 2 + (pt.y - pin.y) ** 2;
        if (d2 < bestD2) {
          bestD2 = d2;
          best = t;
        }
      }
      return best;
    });

    lenCache.current = { lang: langRef.current, totalLen, pinLens };
  }, []);

  const startLoop = useCallback(() => {
    cancelAnimationFrame(rafId.current);

    const frame = () => {
      rafId.current = requestAnimationFrame(frame);

      const root = rootRef.current,
        road = roadRef.current;
      const { totalLen, pinLens } = lenCache.current;
      if (!root || !road || !totalLen) return;

      const scrollH = root.scrollHeight - root.clientHeight;
      const rawT =
        scrollH > 0 ? Math.min(1, Math.max(0, root.scrollTop / scrollH)) : 0;
      const target = rawT * totalLen;

      const lastPinLen =
        pinLens.length > 0 ? pinLens[pinLens.length - 1] : totalLen;

      const activePinLen =
        frozenAt.current !== null && prevActive.current !== null
          ? lenCache.current.pinLens[prevActive.current]
          : null;
      const iconTarget = activePinLen ?? target;
      const effectiveTarget =
        iconProg.current >= lastPinLen ? lastPinLen : iconTarget;

      const dist = Math.abs(effectiveTarget - iconProg.current);
      const dynamicLerp = dist > totalLen * 0.1 ? 0.1 : LERP;

      if (rawT > 0.92) {
        iconProg.current += (lastPinLen - iconProg.current) * 0.12;
        if (Math.abs(lastPinLen - iconProg.current) < 2) {
          iconProg.current = lastPinLen;
        }
      } else {
        iconProg.current += (effectiveTarget - iconProg.current) * dynamicLerp;
        iconProg.current = Math.min(iconProg.current, lastPinLen);
      }

      const iP = Math.min(Math.max(iconProg.current, 0), totalLen);
      const iPt = road.getPointAtLength(iP);
      if (emojiWrap.current) {
        emojiWrap.current.setAttribute(
          "transform",
          `translate(${iPt.x - 14}, ${iPt.y - 32})`,
        );
      }

      if (frozenAt.current !== null) {
        const delta = root.scrollTop - frozenAt.current;
        if (delta >= UNFREEZE_FORWARD_DELTA) {
          frozenAt.current = null;
          setOpenCard(null);
        }
        _updateActivePin(iP, pinLens);
        return;
      }

      const scrollBasedProg = rawT * totalLen;
      let highest = -1;
      pinLens.forEach((pl, i) => {
        if (scrollBasedProg >= pl) highest = i;
      });
      if (highest !== prevUn.current) {
        prevUn.current = highest;
        setUnlocked(highest);
      }

      _updateActivePin(iP, pinLens, true);
    };

    const _updateActivePin = (iP, pinLens, canFreeze = false) => {
      const root = rootRef.current;
      let nearPin = null,
        nearDist = Infinity;
      pinLens.forEach((pl, i) => {
        const dist = pl - iP;
        if (dist >= -PIN_CLOSE_ZONE && dist <= PIN_OPEN_ZONE) {
          const abs = Math.abs(dist);
          if (abs < nearDist) {
            nearDist = abs;
            nearPin = i;
          }
        }
      });

      if (nearPin !== prevActive.current) {
        prevActive.current = nearPin;
        setActivePin(nearPin);

        if (nearPin !== null && canFreeze) {
          frozenAt.current = root.scrollTop;
          frozenRoadProg.current = roadProg.current;
          setOpenCard(nearPin);
          const lastPin = lenCache.current.pinLens.length - 1;
          if (nearPin === lastPin && !celebratedRef.current) {
            celebratedRef.current = true;
            setCelebrate(true);
            setTimeout(() => setCelebrate(false), 3500);
          }
        } else if (nearPin === null) {
          frozenAt.current = null;
          setOpenCard(null);
        }
      }
    };

    rafId.current = requestAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onScroll = () => {
      window.dispatchEvent(
        new CustomEvent("rm-scroll", { detail: { scrollTop: root.scrollTop } }),
      );
      clearTimeout(walkTimer.current);
      walkTimer.current = setTimeout(() => setEmojiClass("idle"), 280);
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const { totalLen } = lenCache.current;
        if (!totalLen || !root) return;
        const scrollH = root.scrollHeight - root.clientHeight;
        const rawT =
          scrollH > 0 ? Math.min(1, Math.max(0, root.scrollTop / scrollH)) : 0;
        iconProg.current = rawT * totalLen;
        roadProg.current = rawT * totalLen;
        frozenAt.current = null;
        setOpenCard(null);
      }
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      root.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      clearTimeout(walkTimer.current);
    };
  }, [lang]);

  const calcCards = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const svgScreenW = svg.getBoundingClientRect().width;
    if (!svgScreenW) return;
    const scale = svgScreenW / VW;
    const HALF_R = (ROAD_W / 2) * scale;
    const GAP = 10,
      CARD_W = 260;
    setCardPos(
      pinsRef.current.map((pin) => {
        const px = pin.x * scale,
          py = pin.y * scale;
        return pin.side === "left"
          ? { left: px - HALF_R - GAP - CARD_W, top: py - 34, isLeft: true }
          : { left: px + HALF_R + GAP, top: py - 34, isLeft: false };
      }),
    );
  }, []);

  useEffect(() => {
    calcCards();
    const ro = new ResizeObserver(calcCards);
    const el = rootRef.current;
    if (el) ro.observe(el);
    return () => ro.disconnect();
  }, [lang, calcCards]);

  const toggle = (i) => setOpenCard((v) => (v === i ? null : i));

  return (
    <div
      className={`rm-root ${theme}`}
      ref={(el) => {
        rootRef.current = el;
      }}
    >
      <Header />
      <div className="rm-hdr">
        <h1 className={h1In ? "in" : ""}>Start Your Programming Journey</h1>
        <p className={pIn ? "in" : ""}>
          Scroll to reveal roadmap · Click steps to explore
        </p>
        <div className="rm-tabs">
          {langs.map((l, i) => (
            <button
              key={l}
              className={[l === lang && "act", tabsIn[i] && "in"]
                .filter(Boolean)
                .join(" ")}
              onClick={() => setLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className={`rm-cue ${cueIn ? "in" : ""}`}>↓ scroll to begin</div>

      <div className="rm-scene" style={{ height: totalH + "px" }}>
        <svg
          ref={svgRef}
          className="rm-svg"
          viewBox={`0 0 ${VW} ${totalH}`}
          style={{ height: totalH + "px" }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="rm-shad">
              <feDropShadow
                dx="3"
                dy="4"
                stdDeviation="5"
                floodColor="rgba(0,0,0,.45)"
              />
            </filter>
          </defs>

          <path
            ref={shadRef}
            d={pathD}
            fill="none"
            stroke="rgba(0,0,0,.4)"
            strokeWidth={ROAD_W + 14}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: "0 99999",
              strokeDashoffset: "0",
              filter: "blur(7px)",
            }}
          />

          <path
            ref={roadRef}
            d={pathD}
            fill="none"
            stroke={theme === "light-theme" ? "#ccc" : "#23233a"}
            strokeWidth={ROAD_W}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#rm-shad)"
            style={{ strokeDasharray: "0 99999", strokeDashoffset: "0" }}
          />

          <path
            ref={dashRef}
            d={pathD}
            fill="none"
            stroke={
              theme === "light-theme" ? "#053859" : "rgba(255,255,255,.25)"
            }
            strokeWidth="2.5"
            strokeLinecap="round"
            style={{ strokeDasharray: "0 99999", strokeDashoffset: "0" }}
          />

          {pins.map((pin, i) => {
            const col = steps[i]?.color || "#f7c651";
            const isIn = i <= unlocked;
            const isActive = i === activePin;
            const totalSteps = steps.length;
            const distKm = (totalSteps - 1 - i) * 1;
            const distLabel = distKm === 0 ? "🏆 Done" : `${distKm} km`;
            const BW = 64,
              BH = 32,
              BR = 4;
            const bx = pin.x - BW / 2,
              by = pin.y - BH - 18;
            const postX = pin.x,
              postY1 = by + BH,
              postY2 = pin.y + 4;
            const SH = 10;

            const fwCX = pin.x;
            const fwCY = by - 28;

            

            return (
              <g
                key={i}
                className={`rm-pin ${isIn ? "in" : ""}`}
                style={{ transformOrigin: `${pin.x}px ${pin.y}px` }}
                onClick={() => toggle(i)}
              >
                {isActive && isIn && (
                  <circle
                    cx={pin.x}
                    cy={pin.y}
                    r="20"
                    fill="none"
                    stroke={col}
                    strokeWidth="2"
                    className="rm-pin-pulse"
                  />
                )}

                <line
                  x1={postX + 2}
                  y1={postY1 + 2}
                  x2={postX + 2}
                  y2={postY2 + 2}
                  stroke="rgba(0,0,0,.3)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1={postX}
                  y1={postY1}
                  x2={postX}
                  y2={postY2}
                  stroke={isActive ? col : "rgba(255,255,255,.55)"}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <rect
                  x={bx + 2}
                  y={by + 2}
                  width={BW}
                  height={BH}
                  rx={BR}
                  fill="rgba(0,0,0,.35)"
                />
                <rect
                  x={bx}
                  y={by}
                  width={BW}
                  height={BH}
                  rx={BR}
                  fill={isActive ? "#1a1a2e" : "#12122a"}
                  stroke={isActive ? col : "rgba(255,255,255,.2)"}
                  strokeWidth={isActive ? "2" : "1"}
                />
                <clipPath id={`cp-${i}`}>
                  <rect x={bx} y={by} width={BW} height={BH} rx={BR} />
                </clipPath>
                <rect
                  x={bx}
                  y={by}
                  width={BW}
                  height={SH}
                  fill={col}
                  opacity="0.9"
                  clipPath={`url(#cp-${i})`}
                />

                <text
                  x={pin.x}
                  y={by + SH + (BH - SH) / 2 + 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isActive ? col : "rgba(255,255,255,.85)"}
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="Poppins, Segoe UI, sans-serif"
                >
                  {distLabel}
                </text>

                <circle
                  cx={pin.x}
                  cy={pin.y + 4}
                  r="5"
                  fill={col}
                  stroke={
                    isActive ? "rgba(255,255,255,.8)" : "rgba(255,255,255,.3)"
                  }
                  strokeWidth={isActive ? "2" : "1"}
                />

                {distKm === 0 && celebrate && (
                  <g>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((j) => {
                      const angle = (j / 8) * Math.PI * 2;
                      const r = 15;
                      const fwColor = FW_COLORS[j % FW_COLORS.length];
                      return (
                        <line
                          key={j}
                          x1={fwCX}
                          y1={fwCY}
                          x2={fwCX + Math.cos(angle) * r}
                          y2={fwCY + Math.sin(angle) * r}
                          stroke={fwColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          style={{
                            animation: `fwBurst .6s ease-out forwards`,
                            animationDelay: `${j * 0.04}s`,
                            transformOrigin: `${fwCX}px ${fwCY}px`,
                          }}
                        />
                      );
                    })}
                    {[0, 1, 2, 3, 4, 5].map((j) => {
                      const angle = (j / 6) * Math.PI * 2 + Math.PI / 6;
                      const r = 12;
                      const fwColor = FW_COLORS[(j + 2) % FW_COLORS.length];
                      return (
                        <line
                          key={`inner-${j}`}
                          x1={fwCX}
                          y1={fwCY}
                          x2={fwCX + Math.cos(angle) * r}
                          y2={fwCY + Math.sin(angle) * r}
                          stroke={fwColor}
                          strokeWidth="2"
                          strokeLinecap="round"
                          style={{
                            animation: `fwBurst .5s ease-out forwards`,
                            animationDelay: `${0.1 + j * 0.05}s`,
                            transformOrigin: `${fwCX}px ${fwCY}px`,
                          }}
                        />
                      );
                    })}
                  </g>
                )}
              </g>
            );
          })}

          <g
            ref={emojiWrap}
            transform={`translate(${MID_X - 26}, ${PAD_T - 44})`}
          >
            <foreignObject
              x="0"
              y="0"
              width="52"
              height="56"
              style={{ overflow: "visible" }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  width: 52,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className={`rm-emoji ${emojiClass}`}>🧑‍💻</span>
              </div>
            </foreignObject>
          </g>
        </svg>

        <div className="rm-cards">
          {cardPos.map((pos, i) => {
            if (!pos) return null;
            const isIn = i <= unlocked;
            const dir = pos.isLeft ? "from-left" : "from-right";
            return (
              <div
                key={`${lang}-card-${i}`}
                className={`rm-card-slot ${dir} ${isIn ? "in" : ""}`}
                style={{
                  left: `${pos.left}px`,
                  top: `${pos.top}px`,
                  width: "260px",
                }}
              >
                <div
                  className={`rm-card ${openCard === i ? "open" : ""}`}
                  onClick={() => toggle(i)}
                >
                  <div className="rm-card-title">
                    <span className="rm-card-ico">{steps[i]?.icon}</span>
                    {steps[i]?.title}
                  </div>
                  <div className="rm-card-links">
                    {steps[i]?.topics
                      ? steps[i].topics.map((item, j) => (
                          <div key={j} className="rm-topic-wrap">
                            <span
                              className="rm-topic"
                              onClick={(e) => {
                                e.stopPropagation();
                                const wrap =
                                  e.currentTarget.closest(".rm-topic-wrap");
                                const desc =
                                  wrap.querySelector(".rm-topic-desc");
                                const isOpen =
                                  wrap.classList.toggle("topic-open");
                                document
                                  .querySelectorAll(".rm-topic-wrap.topic-open")
                                  .forEach((w) => {
                                    if (w !== wrap) {
                                      w.classList.remove("topic-open");
                                      w.querySelector(
                                        ".rm-topic-desc",
                                      ).style.maxHeight = "0";
                                    }
                                  });
                                desc.style.maxHeight = isOpen
                                  ? desc.scrollHeight + "px"
                                  : "0";
                              }}
                            >
                              <span className="rm-topic-arrow">▸</span>
                              <span className="rm-topic-text">{item.t}</span>
                            </span>
                            <div
                              className="rm-topic-desc"
                              style={{
                                maxHeight: "0",
                                overflow: "hidden",
                                transition: "max-height 0.3s ease",
                              }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <p>{item.d}</p>
                            </div>
                          </div>
                        ))
                      : steps[i]?.links.map((lk, j) => (
                          <a
                            key={j}
                            href={lk.u}
                            target="_blank"
                            rel="noreferrer"
                            className="rm-link"
                            onClick={(e) => e.stopPropagation()}
                          >
                            🔗 {lk.n}
                          </a>
                        ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
