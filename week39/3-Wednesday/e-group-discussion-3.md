# Group activity 3

> We will have pair-programming only in Full Stack course i.e (ma,ti,to,pe). All C++ activities will be carried in groups. The link to the online Compiler is below.

## Exercise 1

How overloaded functions are differentiated?


## Exercise 2 
What's wrong with the following program? If so how can you fix it?

```cpp
class Date
{
private:
    int m_year{ 1900 };
    int m_month{ 1 };
    int m_day{ 1 };

public:
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


## Ref
- https://www.learncpp.com/cpp-tutorial/function-overload-differentiation/
- [Online Compiler](https://cpp.sh/)
