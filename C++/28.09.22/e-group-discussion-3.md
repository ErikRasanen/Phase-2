# Group activity 3

> We will have pair-programming only in Full Stack course i.e (ma,ti,to,pe). All C++ activities will be carried in groups. The link to the online Compiler is below.

## Exercise 1 (Extra)

- How overloaded functions are differentiated?
ANSWER:
Number of parameters and type of parameters

- Why C++17 introduced std::string_view?
ANSWER: 
Provides read-only access to an existing string

- What happens if you don’t declare a default constructor?
ANSWER:
If you haven’t defined any other constructors, the compiler will create an empty public default constructor for you


## Exercise 2 (Extra)
What's wrong with the following program? If so how can you fix it?

ANSWER:

```cpp
#include <iostream>

class Date
{
private:
    int m_year{ 1900 };
    int m_month{ 1 };
    int m_day{ 1 };

public:
    Date() = default;

    Date(int year, int month, int day)
    {
        m_year = year;
        m_month = month;
        m_day = day;
    }

};

int main()
{
    Date date{}; 
    Date today{ 2022, 9, 28 };

    return 0;
}
```

## Exercise 3 (Extra)
Write a class named Ball. Ball should have two private member variables with default values: m_color (“black”) and m_radius (10.0). Ball should provide constructors to set only m_color, set only m_radius, set both, or set neither value. For this quiz question, do not use default parameters for your constructors. Also write a function to print out the color and radius of the ball.


The  program below should produce the result:
```bash
color: black, radius: 10
color: blue, radius: 10
color: black, radius: 20
color: blue, radius: 20
```

ANSWER:


```cpp
#include <iostream>
#include <string>
#include <string_view>

class Ball
{
private:
	std::string m_color{};
	double m_radius{};

public:
	Ball()
	{
		m_color = "black";
		m_radius = 10.0;
	}

	Ball(std::string_view color)
	{
		m_color = color;
		m_radius = 10.0;
	}

	Ball(double radius)
	{
		m_color = "black";
		m_radius = radius;
	}

	Ball(std::string_view color, double radius)
	{
		m_color = color;
		m_radius = radius;
	}

	void print()
	{
		std::cout << "color: " << m_color << ", radius: " << m_radius << '\n';
	}
};

int main()
{
	Ball def{};
	def.print();

	Ball blue{ "blue" };
	blue.print();

	Ball twenty{ 20.0 };
	twenty.print();

	Ball blueTwenty{ "blue", 20.0 };
	blueTwenty.print();

	return 0;
}
```

## Ref
- https://www.learncpp.com/cpp-tutorial/function-overload-differentiation/
- https://www.learncpp.com/cpp-tutorial/introduction-to-stdstring_view/
- https://www.learncpp.com/cpp-tutorial/constructors/
- [Online Compiler](https://cpp.sh/)
