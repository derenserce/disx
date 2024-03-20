package org.disx;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;

@Transactional
@ApplicationScoped
public class PostService {

    @Inject
    PostRepository repository;

    public Long save(Post post) {
        repository.persist(post);
        return post.id;
    }

    public Post findById(Long id) {
        return repository.findById(id);
    }
}
