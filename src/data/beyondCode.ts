export type LocalizedJourneyArticle = {
  title: string;
  excerpt: string;
  intro: string;
  sections: Array<{
    heading: string;
    content: string;
  }>;
};

export type JourneyArticle = {
  en: LocalizedJourneyArticle;
  vi: LocalizedJourneyArticle;
};

export const beyondCodeItems: JourneyArticle[] = [
  {
    en: {
      title: 'What Mentoring Taught Me About Learning',
      excerpt: 'Reflections on listening, explaining, and building confidence while supporting students in the Empowering STEM Dreams project.',
      intro: 'Mentoring changed the way I think about learning. A useful explanation is not simply the most technically correct one; it is the one that meets a learner where they are and gives them enough confidence to take the next step.',
      sections: [
        {
          heading: 'Listening before explaining',
          content: 'During project sessions, I learned to begin with questions instead of assumptions. Understanding what a student had already tried helped me identify the real obstacle, choose a familiar example, and avoid turning support into a one-way lecture.',
        },
        {
          heading: 'Turning complexity into small steps',
          content: 'Technical ideas became easier to approach when they were divided into small, visible goals. I practiced giving one useful hint at a time, checking understanding, and allowing students to make the final connection themselves rather than immediately providing the answer.',
        },
        {
          heading: 'Lessons I bring back to engineering',
          content: 'The experience strengthened my patience, preparation, and communication. Those habits also matter in software teams: clear documentation, thoughtful feedback, and the ability to explain a decision can make complex work easier for everyone to understand and continue.',
        },
      ],
    },
    vi: {
      title: 'Vai trò cố vấn đã thay đổi cách tôi nhìn về việc học',
      excerpt: 'Những suy ngẫm về lắng nghe, giải thích và xây dựng sự tự tin khi đồng hành cùng học sinh trong dự án Empowering STEM Dreams.',
      intro: 'Hoạt động cố vấn đã thay đổi cách tôi nhìn về việc học. Một lời giải thích hữu ích không chỉ cần đúng về mặt kỹ thuật; nó còn phải phù hợp với điểm xuất phát của người học và giúp họ đủ tự tin để tự bước tiếp.',
      sections: [
        {
          heading: 'Lắng nghe trước khi giải thích',
          content: 'Trong các buổi hướng dẫn dự án, tôi học cách bắt đầu bằng câu hỏi thay vì giả định. Khi hiểu học sinh đã thử những gì, tôi có thể nhận ra trở ngại thật sự, lựa chọn ví dụ gần gũi và tránh biến việc hỗ trợ thành một buổi truyền đạt một chiều.',
        },
        {
          heading: 'Chia vấn đề phức tạp thành từng bước nhỏ',
          content: 'Các ý tưởng kỹ thuật trở nên dễ tiếp cận hơn khi được chia thành những mục tiêu nhỏ và nhìn thấy được. Tôi tập đưa ra từng gợi ý vừa đủ, kiểm tra mức độ hiểu và để học sinh tự tạo ra kết nối cuối cùng thay vì đưa đáp án ngay lập tức.',
        },
        {
          heading: 'Bài học mang trở lại công việc kỹ thuật',
          content: 'Trải nghiệm này giúp tôi kiên nhẫn, chuẩn bị có hệ thống và giao tiếp rõ ràng hơn. Đây cũng là những thói quen quan trọng trong đội ngũ phần mềm: tài liệu dễ hiểu, phản hồi có cân nhắc và khả năng giải thích quyết định sẽ giúp công việc phức tạp trở nên dễ tiếp nối hơn.',
        },
      ],
    },
  },
  {
    en: {
      title: 'From a Research Question to the Eureka Semi-Final',
      excerpt: 'The uncertainty, documentation, and teamwork behind a high-resolution retinal vessel segmentation research project.',
      intro: 'Undergraduate research taught me how to keep moving when there is no obvious implementation path. Instead of treating uncertainty as a blocker, I learned to turn it into smaller questions that could be studied, tested, documented, and discussed with the team.',
      sections: [
        {
          heading: 'Working from evidence',
          content: 'Our topic focused on high-resolution retinal vessel segmentation. The work required us to read related studies carefully, understand how evaluation choices affected the result, and connect each experiment to a clear question rather than changing several things at once.',
        },
        {
          heading: 'Documenting what did not work',
          content: 'Not every attempt produced a better result, but unsuccessful experiments were still valuable when their conditions and outcomes were recorded clearly. This process taught me to preserve evidence, compare decisions, and avoid repeating work without learning from it.',
        },
        {
          heading: 'A milestone built through iteration',
          content: 'The report was rated “Very Good” at university level and reached the semifinals of the 2025 Eureka Student Research Award. More important than the recognition was the discipline behind it: repeated review, mentor feedback, shared responsibility, and many small improvements over time.',
        },
      ],
    },
    vi: {
      title: 'Từ câu hỏi nghiên cứu đến bán kết Eureka',
      excerpt: 'Hành trình làm việc với sự chưa chắc chắn, tài liệu hóa và tinh thần đồng đội trong đề tài phân đoạn mạch máu võng mạc độ phân giải cao.',
      intro: 'Nghiên cứu khoa học sinh viên dạy tôi cách tiếp tục tiến lên khi chưa có một con đường triển khai rõ ràng. Thay vì xem sự chưa chắc chắn là trở ngại, tôi học cách chuyển nó thành những câu hỏi nhỏ hơn để đọc, thử nghiệm, ghi chép và trao đổi cùng nhóm.',
      sections: [
        {
          heading: 'Làm việc dựa trên minh chứng',
          content: 'Đề tài tập trung vào bài toán phân đoạn mạch máu võng mạc độ phân giải cao. Quá trình nghiên cứu yêu cầu chúng tôi đọc kỹ các công trình liên quan, hiểu cách lựa chọn tiêu chí đánh giá ảnh hưởng đến kết quả và gắn mỗi thử nghiệm với một câu hỏi rõ ràng.',
        },
        {
          heading: 'Ghi lại cả những điều chưa hiệu quả',
          content: 'Không phải thử nghiệm nào cũng tạo ra kết quả tốt hơn, nhưng một thử nghiệm chưa thành công vẫn có giá trị nếu điều kiện và kết quả được ghi lại đầy đủ. Tôi học được cách bảo toàn minh chứng, so sánh các quyết định và tránh lặp lại công việc mà không rút ra bài học.',
        },
        {
          heading: 'Cột mốc được tạo nên từ nhiều vòng cải tiến',
          content: 'Báo cáo được xếp loại “Rất tốt” ở cấp trường và vào bán kết Giải thưởng Sinh viên Nghiên cứu Khoa học Eureka 2025. Điều có ý nghĩa hơn cả thành tích là kỷ luật phía sau nó: nhiều vòng rà soát, phản hồi từ người hướng dẫn, trách nhiệm chung và những cải tiến nhỏ được tích lũy theo thời gian.',
        },
      ],
    },
  },
  {
    en: {
      title: 'Learning Ownership Through Real Projects',
      excerpt: 'How academic, team, and personal projects shaped the way I make decisions, collaborate, and take responsibility for software.',
      intro: 'Projects became the place where isolated technical concepts started to form a complete engineering process. Building something usable meant thinking beyond code: clarifying requirements, choosing trade-offs, testing important flows, communicating progress, and preparing the work for other people to run.',
      sections: [
        {
          heading: 'Connecting requirements to implementation',
          content: 'I learned to translate a broad idea into smaller use cases, data relationships, API responsibilities, and user-facing flows. That structure made it easier to identify missing assumptions early and explain why a technical decision supported the product goal.',
        },
        {
          heading: 'Taking responsibility across the stack',
          content: 'Working on backend APIs, database integration, frontend workflows, testing, and deployment preparation gave me a clearer view of how decisions affect one another. It also taught me that a feature is not finished when the code compiles; it should be understandable, testable, and usable.',
        },
        {
          heading: 'Improving through collaboration',
          content: 'Team projects strengthened my habit of sharing progress, reviewing specifications, and resolving differences through concrete evidence. Personal work developed a different kind of discipline: deciding priorities independently, documenting unfinished questions, and continuing to improve without waiting for perfect conditions.',
        },
      ],
    },
    vi: {
      title: 'Học tinh thần làm chủ qua những dự án thực tế',
      excerpt: 'Cách các dự án học thuật, dự án nhóm và dự án cá nhân định hình tư duy ra quyết định, cộng tác và chịu trách nhiệm với sản phẩm.',
      intro: 'Dự án là nơi những kiến thức kỹ thuật rời rạc bắt đầu kết nối thành một quy trình phát triển hoàn chỉnh. Để tạo ra một sản phẩm có thể sử dụng, tôi phải nghĩ xa hơn việc viết code: làm rõ yêu cầu, cân nhắc đánh đổi, kiểm thử luồng quan trọng, trao đổi tiến độ và chuẩn bị để người khác có thể vận hành công việc.',
      sections: [
        {
          heading: 'Kết nối yêu cầu với cách triển khai',
          content: 'Tôi học cách chuyển một ý tưởng rộng thành các use case nhỏ hơn, quan hệ dữ liệu, trách nhiệm của API và luồng tương tác người dùng. Cấu trúc này giúp phát hiện giả định còn thiếu sớm hơn và giải thích rõ vì sao một quyết định kỹ thuật phục vụ mục tiêu sản phẩm.',
        },
        {
          heading: 'Chịu trách nhiệm xuyên suốt sản phẩm',
          content: 'Việc làm việc với API Backend, tích hợp cơ sở dữ liệu, luồng Frontend, kiểm thử và chuẩn bị triển khai giúp tôi thấy rõ hơn tác động qua lại giữa các quyết định. Tôi cũng hiểu rằng một tính năng chưa hoàn thành chỉ vì code đã biên dịch; nó cần dễ hiểu, có thể kiểm thử và thực sự sử dụng được.',
        },
        {
          heading: 'Tiến bộ thông qua cộng tác',
          content: 'Dự án nhóm giúp tôi hình thành thói quen chia sẻ tiến độ, rà soát đặc tả và giải quyết khác biệt bằng minh chứng cụ thể. Dự án cá nhân rèn một dạng kỷ luật khác: tự xác định ưu tiên, ghi lại các câu hỏi chưa giải quyết và tiếp tục cải tiến thay vì chờ điều kiện hoàn hảo.',
        },
      ],
    },
  },
];
