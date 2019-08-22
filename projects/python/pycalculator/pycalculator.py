from math import *

def finput(x):
    return float(input(x))

def dec(x):
    return float('%.3f' % x)

def numlist():
    n = int(input('\nEnter your quantity of numbers: '))
    numbers = []
    for i in range(1,n+1):
        numbers.append(finput('Enter number #' + str(i) + ': '))
    return numbers

def add():
    sum = 0
    for i in numlist():
        sum += i
    print('\nYour sum is', sum)

def subtract():
    print('\nYour difference is', (finput('Enter your minuend: ')) - finput('Enter your subtrahend: '))

def multiply():
    product = 1
    for i in numlist():
        product *= i
    print('\nYour product is', product)

def divide():
    print('\nYour quotient is', dec((finput('Enter your dividend: ')) / finput('Enter your divisor: ')))

def differentiate():
    fx = input('\nEnter your equation: ')
    f = lambda x: eval(fx)
    value = finput('Enter your value: ')
    h = 0.1e10
    derivative = ((f(value + h) - f(value - h)) / (2 * h))
    print('\nYour derivative is', dec(derivative))

def integrate():
    fx = input('Enter your equation: ')
    f = lambda x: eval(fx)
    a = finput('Enter your lower bound: ')
    b = finput('Enter your upper bound: ')
    n = int(1e5)
    h = (b - a) / n
    integral = (f(a) + f(b)) / 2
    for i in range(1, n):
        integral += f(a + i * h)
    integral *= h
    print('\nYour integral is', dec(integral))

def mean():
    total = 0
    n = 0
    for i in numlist():
        total += i
        n += 1 
    print('\n Your mean is', dec((total/n)))

def quadratic():
    print('\nQuadratics are in the format "ax² + bx + c"')
    a = finput('Enter your "a" value: ')
    b = finput('Enter your "b" value: ')
    c = finput('Enter your "c" value: ')
    print('Your two roots are x =', dec((-b + ((b**2) - (4 * a * c))**(1/2)) / (2 * a)), 'and x =', dec((-b - ((b**2) - (4 * a * c))**(1/2)) / (2 * a)))

def calculator():

    def error():
        print('\nInvalid selection: exiting program...')
        raise SystemExit

    def select():
        print('\nSelect your option:')
        print('1. Add')
        print('2. Subtract')
        print('3. Multiply')
        print('4. Divide')
        print('5. Differentiate')
        print('6. Integrate')
        print('7. Mean')
        print('8. Quadratic')
        return (input('Enter your choice: '))

    def operation(choice):
        if choice == '1':
            add()
        elif choice == '2':
            subtract()
        elif choice == '3':
            multiply()
        elif choice == '4':
            divide()
        elif choice == '5':
            differentiate()
        elif choice == '6':
            integrate()
        elif choice == '7':
            mean()
        elif choice == '8':
            quadratic()
        else:
            error()
        print('\nExit?')
        print('1. Continue')
        print('2. Return to options')
        print('3. Exit the program')
        exit = input('Enter your choice: ')
        if exit == '1':
            operation(choice)
        elif exit == '2':
            operation(select())
        elif exit == '3':
            print('\nExiting program...')
            raise SystemExit
        else:
            error()

    operation(select())

