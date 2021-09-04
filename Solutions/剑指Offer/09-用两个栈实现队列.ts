class CQueue {
  protected stack1: number[] = [];
  protected stack2: number[] = [];

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (!this.stack2.length) {
      if (!this.stack1.length) return -1;

      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    } else {
      return this.stack2.pop();
    }
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
