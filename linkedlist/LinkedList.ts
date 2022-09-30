
interface LinkedListType {
    head: LinkedNode<any> | null;
    tail: LinkedNode<any> | null;
    size: number;
}

class LinkedNode<T> {
    value: T;
    next: LinkedNode<T> | null;

    constructor(value: T, next: LinkedNode<T> | null = null) {
        this.value = value;
        this.next = next
    }
}

class LinkedList<T> {
    list: LinkedListType = {
        head: null,
        tail: null,
        size: 0
    };

    //Insert The Head Node
    insertFirst(node: LinkedNode<T>) {
        if (this.list.head === null) {
            this.list.head = node;
            this.list.size++;
        } else {
            node.next = this.list.head;
            this.list.head = node;
            this.list.size++;
        }
    }

    //Insert Last Node
    insertLast(node: LinkedNode<T>) {
        if (this.list.head === null ) {
            this.list.head = node   
        }else {
            this.list.head.next 
        }
    }

    printData() {
        console.log(this.list.head)
    }
}

const LK = new LinkedList();
LK.insertFirst(new LinkedNode(1))
LK.insertFirst(new LinkedNode(2))
LK.insertFirst(new LinkedNode(3))

LK.printData();

