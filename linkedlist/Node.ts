export class LinkedNode<T> {
    value: T;
    next: LinkedNode<T>;

    constructor( value: T, next: LinkedNode<T> ) {
        this.value = value;
        this.next = next
    }
} 