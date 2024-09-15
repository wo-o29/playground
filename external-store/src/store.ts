let count = 0;
const subscribers: Set<() => void> = new Set();

const countStore = {
  getServerSnapshot() {
    return 0; // 서버에서의 초기값
  },

  read() {
    return count; // getSnapshot, 스냅샷 가져오기
  },

  subscribe(callback: () => void) {
    // 스토어 구독, 카운트가 업데이트 될 때마다 호출
    subscribers.add(callback);

    return () => subscribers.delete(callback);
  },

  increment() {
    count++;
    subscribers.forEach((callback) => callback());
  },

  decrement() {
    count--;
    subscribers.forEach((callback) => callback());
  },
};

export default countStore;
