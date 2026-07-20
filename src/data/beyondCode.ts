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
      excerpt: 'Reflections from supporting secondary students in the Empowering STEM Dreams project.',
      intro: 'Mentoring reminded me that learning is not only about finding the right answer. It is also about creating enough confidence for someone to keep asking questions.',
      sections: [
        {
          heading: 'Making ideas approachable',
          content: 'I practiced explaining technical ideas with simple examples, listening before offering a solution, and adjusting the pace to each student.',
        },
        {
          heading: 'Learning through responsibility',
          content: 'Preparing activities made me more patient, organized, and aware of how clear communication can help a group move forward together.',
        },
      ],
    },
    vi: {
      title: 'Bài học từ vai trò cố vấn (Mentoring)',
      excerpt: 'Những suy ngẫm từ hành trình đồng hành cùng học sinh trung học trong dự án Empowering STEM Dreams.',
      intro: 'Làm người cố vấn nhắc nhở tôi rằng học tập không chỉ là tìm kiếm đáp án đúng. Đó còn là việc tạo ra đủ sự tự tin để một người tiếp tục đặt ra các câu hỏi.',
      sections: [
        {
          heading: 'Diễn giải ý tưởng dễ tiếp cận',
          content: 'Tôi rèn luyện giải thích các khái niệm kỹ thuật bằng ví dụ thực tế, học cách lắng nghe trước khi đưa ra câu trả lời và điều chỉnh nhịp độ cho từng học sinh.',
        },
        {
          heading: 'Học hỏi từ trách nhiệm',
          content: 'Chuẩn bị hoạt động giúp tôi kiên nhẫn, tổ chức kế hoạch tốt hơn và nhận thức rõ tầm quan trọng của giao tiếp rõ ràng khi làm việc nhóm.',
        },
      ],
    }
  },
  {
    en: {
      title: 'From a Research Question to the Euréka Semi-Final',
      excerpt: 'A look back at the uncertainty, iteration, and teamwork behind my student research journey.',
      intro: 'Research taught me how to keep moving when there is no obvious path. Each experiment became a chance to question assumptions and improve the next decision.',
      sections: [
        {
          heading: 'Working with uncertainty',
          content: 'The process involved reading, testing, documenting results, and accepting that an unsuccessful attempt can still reveal useful information.',
        },
        {
          heading: 'A shared milestone',
          content: 'Reaching the Euréka semi-final was meaningful because it reflected consistent teamwork, feedback from mentors, and many small improvements over time.',
        },
      ],
    },
    vi: {
      title: 'Hành trình Nghiên cứu đến Bán kết Euréka',
      excerpt: 'Nhìn lại những thử nghiệm, cải tiến liên tục và tinh thần đồng đội phía sau đề tài nghiên cứu sinh viên.',
      intro: 'Nghiên cứu dạy tôi cách tiếp tục tiến bước khi không có con đường định sẵn. Mỗi thử nghiệm thất bại là một cơ hội để xem xét lại các giả định và cải thiện quyết định tiếp theo.',
      sections: [
        {
          heading: 'Làm việc với những điều chưa rõ ràng',
          content: 'Quá trình đòi hỏi đọc tài liệu, kiểm thử, ghi chép kết quả chi tiết và học cách chấp nhận rằng một kết quả không như ý vẫn mang giá trị tham khảo lớn.',
        },
        {
          heading: 'Cột mốc đáng nhớ cùng đồng đội',
          content: 'Tiến vào bán kết Euréka có ý nghĩa lớn vì nó là kết quả của sự nỗ lực làm việc nhóm bền bỉ, sự hướng dẫn từ các thầy cô cố vấn và hàng loạt những tinh chỉnh nhỏ qua thời gian.',
        },
      ],
    }
  },
  {
    en: {
      title: 'Building Confidence Through Student Projects',
      excerpt: 'How classroom foundations became practical lessons in ownership, collaboration, and growth.',
      intro: 'My projects have been a place to connect theory with real decisions. They have also shown me how much good software depends on curiosity, communication, and follow-through.',
      sections: [
        {
          heading: 'Learning by making decisions',
          content: 'Moving from an idea to a working product pushed me to define priorities, handle trade-offs, and take responsibility for the quality of my work.',
        },
        {
          heading: 'Progress over perfection',
          content: 'I learned to seek feedback early, improve in small steps, and treat every challenge as evidence of what I should learn next.',
        },
      ],
    },
    vi: {
      title: 'Xây dựng Sự tự tin qua các Dự án Học tập',
      excerpt: 'Làm thế nào kiến thức giảng đường trở thành bài học thực tế về quyền sở hữu dự án, sự hợp tác và phát triển.',
      intro: 'Các dự án là cơ hội tuyệt vời để tôi kết nối lý thuyết vào thực tế. Chúng cũng chứng minh rằng một phần mềm tốt phụ thuộc rất nhiều vào sự tò mò, khả năng giao tiếp và theo đuổi mục tiêu.',
      sections: [
        {
          heading: 'Học qua việc tự đưa ra quyết định',
          content: 'Đi từ ý tưởng đến sản phẩm chạy thử buộc tôi phải xác định thứ tự ưu tiên, cân đối các mặt hạn chế và chịu trách nhiệm về chất lượng sản phẩm mình tạo ra.',
        },
        {
          heading: 'Tiến bộ thay vì hoàn hảo ngay lập tức',
          content: 'Tôi tập thói quen tìm kiếm phản hồi sớm, cải tiến từng bước nhỏ và coi mọi thách thức là bài học chỉ ra những gì mình cần trau dồi tiếp theo.',
        },
      ],
    }
  }
];
