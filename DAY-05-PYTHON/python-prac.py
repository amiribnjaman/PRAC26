print('Hello Python world')


# Check if name is amir
# Python coding indentation example
# Pyhon uses indentation to define code blocks
# Python condional statement example
name = 'amir'
if name == 'amir':
    print('yes')
else:
    print('no');


# Example of line continuation using backslash
total = 2 + \
    3 + \
    5
print(total)

# Example of line continuation using parentheses
user = ['amir', 'john',
        'doe' ]
print(user)


# Example of multi-line string
multi_line_string = """This is a multi-line
string example  in Python."""
print(multi_line_string)


raw_input = input  # For Python 3 compatibility
raw_input('\nPress Enter to exit...')

# Example of using sys module to write to stdout
# sys.stdout.write() does not add a newline by default
# sys.stdout.write is use to write string to standard output
import sys; x = 'foo'; sys.stdout.write(x+'\n');


