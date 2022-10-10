# Group activity 3

> We will have pair-programming only in Full Stack course i.e (ma,ti,to,pe). All C++ activities will be carried in groups. The link to the online Compiler is below.

## Exercise 1 
Write an Apple class and a Banana class that are derived from a common Fruit class. Fruit should have two members: a name and a color.

The following program should run:

```cpp
int main()
{
	Apple a{ "red" };
	Banana b{};

	std::cout << "My " << a.getName() << " is " << a.getColor() << ".\n";
	std::cout << "My " << b.getName() << " is " << b.getColor() << ".\n";

	return 0;
}
```
And produce the result:

```bash
My apple is red.
My banana is yellow.
```

## Exercise 2

Add a new class to the previous program called GrannySmith that inherits from Apple.

The following program should run:

```cpp
int main()
{
	Apple a{ "red" };
	Banana b;
	GrannySmith c;

	std::cout << "My " << a.getName() << " is " << a.getColor() << ".\n";
	std::cout << "My " << b.getName() << " is " << b.getColor() << ".\n";
	std::cout << "My " << c.getName() << " is " << c.getColor() << ".\n";

	return 0;
}
```
And produce the result:

```bash
My apple is red.
My banana is yellow.
My granny smith apple is green.
```
## Exercise 3 

What is  std::string_view?

## Ref
- https://www.learncpp.com/cpp-tutorial/chapter-17-comprehensive-quiz/
- [Online Compiler](https://cpp.sh/)

