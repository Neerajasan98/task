class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat says meow");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog says woof");
    }
}

public class PolymorphismExample {
    public static void main(String[] args) {
        Animal animal1 = new Animal();
        Animal animal2 = new Cat();
        Animal animal3 = new Dog();

        animal1.makeSound(); // Calls the Animal class's makeSound() method
        animal2.makeSound(); // Calls the Cat class's makeSound() method
        animal3.makeSound(); // Calls the Dog class's makeSound() method
    }
}

